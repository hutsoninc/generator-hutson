"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const rimraf = require("rimraf");

describe("generator-hutson:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "./../generators/app"))
      .inDir(path.join(__dirname, "tmp"))
      .withPrompts({
        projectName: "tmp",
        creative: [
          "includeGoogleAds",
          "includeGoogleSearch",
          "includeGoogleLocalPost",
          "includeSocialMediaAds",
          "includeSocialMediaPost",
          "includeMailer",
          "includeEmail",
          "includeWebsiteSlider",
          "includeWebsitePromo",
          "includeVSNetworks",
          "includeUTMBuilder"
        ],
        googleAds: "googleAdsLifestyle",
        socialMediaPost: "socialPostCarousel",
        socialMediaAds: "socialAdsCarousel"
      });
  });

  it("creates files", () => {
    assert.file([ 
      path.join(__dirname, "tmp/Email/Email Banner.psd"),
      path.join(__dirname, "tmp/Social Media/Facebook Carousel Ad.psd"),
      path.join(__dirname, "tmp/Social Media/Facebook Carousel Post.psd"),
      path.join(__dirname, "tmp/Google Ads/Google Ads.psd"),
      path.join(__dirname, "tmp/Google Local Post.psd"),
      path.join(__dirname, "tmp/Mailer.indd"),
      path.join(__dirname, "tmp/Search Ads.xlsx"),
      path.join(__dirname, "tmp/UTM Builder.xlsx"),
      path.join(__dirname, "tmp/VS Networks.psd"),
      path.join(__dirname, "tmp/Website/Website Slider Image.psd"),
      path.join(__dirname, "tmp/Website/Website Promo Image.psd")
    ]);
  });

  afterAll(() => {
    rimraf.sync(path.join(__dirname, "tmp"));
  });
});
