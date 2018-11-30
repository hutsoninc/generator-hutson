// Directory names
const googleAds = "Google Ads";
const socialMedia = "Social Media";
const email = "Email";

// Template file and destination file paths
module.exports = {
  // Google Ads
  googleAdsLifestyle: {
    template: "Google Ads Lifestyle.psd",
    destination: `${googleAds}/Google Ads.psd`
  },
  googleAdsCutout: {
    template: "Google Ads Cutout.psd",
    destination: `${googleAds}/Google Ads.psd`
  },
  googleSearchAds: {
    template: "Search Ads.xlsx",
    destination: `${googleAds}/Search Ads.xlsx`
  },
  googleLocalPost: {
    template: "Google Local Post.psd",
    destination: `${googleAds}/Google Local Post.psd`
  },
  // Social Ads
  socialAdsCarousel: {
    template: "Facebook Carousel.psd",
    destination: `${socialMedia}/Facebook Carousel Ad.psd`
  },
  socialAdsStandard: {
    template: "Facebook Standard.psd",
    destination: `${socialMedia}/Facebook Ad.psd`
  },
  socialPostCarousel: {
    template: "Facebook Carousel.psd",
    destination: `${socialMedia}/Facebook Carousel Post.psd`
  },
  socialPostStandard: {
    template: "Facebook Standard.psd",
    destination: `${socialMedia}/Facebook Post.psd`
  },
  // Mailer
  mailer: {
    template: "Mailer.indd",
    destination: "Mailer.indd"
  },
  // Email
  email: {
    template: "Email Banner.psd",
    destination: `${email}/Email Banner.psd`
  },
  // VS Networks
  vsNetworks: {
    template: "VS Networks.psd",
    destination: "VS Networks.psd"
  },
  // UTM Builder
  utmBuilder: {
    template: "UTM Builder.xlsx",
    destination: "UTM Builder.xlsx"
  }
};
