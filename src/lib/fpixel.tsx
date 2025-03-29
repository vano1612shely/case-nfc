export const FB_PIXEL_ID = process.env.FB_PIXEL_ID;

export const pageView = () => {
    window.fbq("track", "pageView")
}