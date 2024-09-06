import { useEffect } from 'react';

const SubstackFeed = () => {
  useEffect(() => {
    window.SubstackFeedWidget = {
      substackUrl: "grimaco.substack.com",
      layout: "right",
      posts: 3,
      filter: "top",
      colors: {
        primary: "#570157",
        secondary: "#580000",
        background: "#FFFFFF",
      },
    };

    const script = document.createElement('script');
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="substack-feed-embed"></div>;
};


const Blog=()=>{
    return(
        <div className="min-vh-100 container-fluid">
            <div className="text-center">
                <h1 className="primary_text">Blog</h1>
                <p className="secondary_text">Stay Up to date with updates from us @ Grimaco</p>
            </div>
            <div>
                <SubstackFeed/>
            </div>
            
        </div>
    )
}

export default Blog