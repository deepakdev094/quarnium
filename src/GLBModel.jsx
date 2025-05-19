import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { OrbitControls, Environment, SpotLight } from "@react-three/drei";

export function GLBModel({ scrollY }) {
  const ref = useRef();
  const spotLightRef = useRef();
  const { scene } = useGLTF("/Quantum.glb"); // Assuming the file is in /public
  const { camera } = useThree();

  // Store the last valid scroll position and scale
  const lastScrollPos = useRef(0);
  const lastScale = useRef(1); // Increased initial scale
  const isDraggingRef = useRef(false);

  // Track if controls are active
  const [controlsActive, setControlsActive] = useState(false);

  useEffect(() => {
    // Initialize window.isDragging if it doesn't exist
    if (typeof window.isDragging === "undefined") {
      window.isDragging = false;
    }

    // Set camera position slightly back to ensure model visibility
    camera.position.z = 5;

    // Clean up
    return () => {
      window.isDragging = false;
    };
  }, [camera]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Get current scroll position or use last valid one
      const scrollPosition = scrollY.current;

      // Only update lastScrollPos if we have a valid scroll value
      if (typeof scrollPosition === "number" && !isNaN(scrollPosition)) {
        lastScrollPos.current = scrollPosition;
      }

      // Calculate scroll progress as a percentage of total scroll height (400vh)
      const totalScrollHeight = window.innerHeight * 4; // 400vh
      const scrollProgress = lastScrollPos.current / totalScrollHeight; // 0 to 1 for the entire scroll range

      // Handle horizontal movement based on scroll position
      // First quarter: Move from right to left
      // Second quarter: Move from left to right
      // Third quarter: Move from right to left again
      // Fourth quarter: Move to center with zoom

      let xPosition = 0;

      if (scrollProgress <= 0.25) {
        // First quarter: Right to left (2.5 to -2.5)
        const quarterProgress = scrollProgress * 4; // 0 to 1 for this quarter
        xPosition = 2.5 - quarterProgress * 5; // Start at 2.5, end at -2.5
      } else if (scrollProgress <= 0.5) {
        // Second quarter: Left to right (-2.5 to 2.5)
        const quarterProgress = (scrollProgress - 0.25) * 4; // 0 to 1 for this quarter
        xPosition = -2.5 + quarterProgress * 5; // Start at -2.5, end at 2.5
      } else if (scrollProgress <= 0.75) {
        // Third quarter: Right to left (2.5 to -2.5)
        const quarterProgress = (scrollProgress - 0.5) * 4; // 0 to 1 for this quarter
        xPosition = 2.5 - quarterProgress * 5; // Start at 2.5, end at -2.5
      } else {
        // Fourth quarter: Move to center and zoom in (-2.5 to 0)
        const quarterProgress = (scrollProgress - 0.75) * 4; // 0 to 1 for this quarter
        xPosition = -2.5 + quarterProgress * 2.5; // Start at -2.5, end at 0 (center)
      }

      // Apply horizontal position if not being dragged
      if (!isDraggingRef.current && !controlsActive) {
        ref.current.position.x = xPosition;

        // Constant self-rotation around Y axis
        ref.current.rotation.y += delta * 0.5; // Continuous slow rotation

        // Add a slight tilt based on horizontal position for visual interest
        ref.current.rotation.z = xPosition * 0.05;
      }

      // Scale logic: calculate scale based on scroll
      let scale = 1.5; // Increased base scale

      if (scrollProgress > 0.75) {
        // In the last quarter, zoom in gradually
        const zoomProgress = (scrollProgress - 0.75) * 4; // 0 to 1 for the last quarter
        scale = 1 + zoomProgress * 0.5; // Start at 0.15, end at 0.45
      } else {
        // Small fluctuations in other quarters
        scale = 1 + Math.sin(scrollProgress * Math.PI * 4) * 0.05; // Subtle size pulsing
      }

      // Store the calculated scale
      lastScale.current = scale;

      // Apply the scale - always use the calculated scale
      ref.current.scale.set(scale, scale, scale);

      // Move spotlight with model
      if (spotLightRef.current) {
        spotLightRef.current.position.x = xPosition + 3;
        spotLightRef.current.target = ref.current;
      }
    }
  });

  // Handle orbit controls state
  const handleControlStart = () => {
    isDraggingRef.current = true;
    window.isDragging = true;
    setControlsActive(true);
  };

  const handleControlEnd = () => {
    isDraggingRef.current = false;
    window.isDragging = false;
    setControlsActive(false);
  };

  return (
    <>
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.8} /> {/* Increased ambient light */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight
        position={[-5, -5, -5]}
        intensity={0.7}
        color="#ffcc77"
      />
      <SpotLight
        ref={spotLightRef}
        position={[5, 5, 5]}
        angle={0.6}
        penumbra={0.5}
        intensity={2} // Increased intensity
        color="#ffffcc"
        distance={20}
        castShadow
      />
      {/* Environment adds realistic reflections with higher intensity */}
      <Environment preset="sunset" intensity={1.5} />
      <primitive
        ref={ref}
        object={scene}
        position={[2.5, 0, 0]}
        castShadow
        receiveShadow
      />
      <OrbitControls
        enablePan={false}
        enableZoom={true} // Enable zoom for better user control
        makeDefault
        onStart={handleControlStart}
        onEnd={handleControlEnd}
        enableDamping={true}
        dampingFactor={0.25}
        minDistance={3} // Prevent zooming in too close
        maxDistance={8} // Prevent zooming out too far
      />
    </>
  );
}
