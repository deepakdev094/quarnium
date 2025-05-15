const ContentWrapper = ({children}) => {
    return (
        <div className="bg-red-500" style={{
            position: 'relative',
            zIndex: 2, // Higher zIndex to be above the canvas
            color: 'white',
            padding: '20px',
            // maxWidth: '800px',
            margin: '0 auto',
            // marginTop: '30vh', // Start content a bit down the page
            pointerEvents: 'auto' // Ensure content is clickable
          }}>
                {children}
        </div>
    )
}

export default ContentWrapper;