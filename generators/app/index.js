"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const fs = require("fs");
const config = require("./config");

module.exports = class extends Generator {
  prompting() {
    this.log(`Welcome to the ${chalk.green("hutson project generator")}!`);

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Your project name",
        validate: input => {
          if (input.trim() === "") {
            console.log("\nProject name required");
            return false;
          }
          let files = fs.readdirSync(process.cwd());
          if (files.indexOf(input) >= 0) {
            console.log("\nProject directory already exists");
            return false;
          }
          return true;
        }
      },
      {
        type: "checkbox",
        name: "creative",
        message: "What would you like included?",
        choices: [
          {
            name: "Google Display Ads",
            value: "includeGoogleAds"
          },
          {
            name: "Google Search",
            value: "includeGoogleSearch"
          },
          {
            name: "Google Local Post",
            value: "includeGoogleLocalPost"
          },
          {
            name: "Social Media Ads",
            value: "includeSocialMediaAds"
          },
          {
            name: "Social Media Post",
            value: "includeSocialMediaPost"
          },
          {
            name: "Mailer",
            value: "includeMailer"
          },
          {
            name: "Email",
            value: "includeEmail"
          },
          {
            name: "Website Slider Image",
            value: "includeWebsiteSlider"
          },
          {
            name: "Website Promo Image",
            value: "includeWebsitePromo"
          },
          {
            name: "Website Landing Page",
            value: "includeWebsiteLandingPage"
          },
          {
            name: "VS Networks",
            value: "includeVSNetworks"
          },
          {
            name: "UTM Builder",
            value: "includeUTMBuilder"
          }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  displayName() {
    this.log("Creating a project folder for " + this.props.projectName);
  }

  googleAdsPrompting() {
    let includeGoogleAds = this.props.creative.indexOf("includeGoogleAds") >= 0;

    if (includeGoogleAds) {
      const prompts = [
        {
          type: "list",
          name: "googleAds",
          message: "What type of Google ads?",
          choices: [
            {
              name: "Lifestyle Background",
              value: "googleAdsLifestyle"
            },
            {
              name: "Light background with cutout",
              value: "googleAdsCutout"
            }
          ]
        }
      ];

      return this.prompt(prompts).then(props => {
        this.props = { ...this.props, ...props };
      });
    }
  }

  socialMediaPostPrompting() {
    let includeSocialMediaPost =
      this.props.creative.indexOf("includeSocialMediaPost") >= 0;

    if (includeSocialMediaPost) {
      const prompts = [
        {
          type: "list",
          name: "socialMediaPost",
          message: "What type of social media post?",
          choices: [
            {
              name: "Carousel",
              value: "socialPostCarousel"
            },
            {
              name: "16x9",
              value: "socialPostStandard"
            }
          ]
        }
      ];

      return this.prompt(prompts).then(props => {
        this.props = { ...this.props, ...props };
      });
    }
  }

  socialMediaAdsPrompting() {
    let includeSocialMediaAds =
      this.props.creative.indexOf("includeSocialMediaAds") >= 0;

    if (includeSocialMediaAds) {
      const prompts = [
        {
          type: "list",
          name: "socialMediaAds",
          message: "What type of social media ads?",
          choices: [
            {
              name: "Carousel",
              value: "socialAdsCarousel"
            },
            {
              name: "16x9",
              value: "socialAdsStandard"
            }
          ]
        }
      ];

      return this.prompt(prompts).then(props => {
        this.props = { ...this.props, ...props };
      });
    }
  }

  writing() {
    let {
      projectName,
      socialMediaPost,
      socialMediaAds,
      googleAds,
      creative
    } = this.props;

    // Set root to project name
    this.destinationRoot(projectName);

    this.log("Copying files...");

    // Google Ads
    if (googleAds) {
      // Lifestyle background ad
      if (googleAds.indexOf("googleAdsLifestyle") >= 0) {
        this.fs.copy(
          this.templatePath(config.googleAdsLifestyle.template),
          this.destinationPath(config.googleAdsLifestyle.destination)
        );
      }
      // Cutout ad
      if (googleAds.indexOf("googleAdsCutout") >= 0) {
        this.fs.copy(
          this.templatePath(config.googleAdsCutout.template),
          this.destinationPath(config.googleAdsCutout.destination)
        );
      }
    }

    // Google Search Ads
    if (creative.indexOf("includeGoogleSearch") >= 0) {
      this.fs.copy(
        this.templatePath(config.googleSearchAds.template),
        this.destinationPath(config.googleSearchAds.destination)
      );
    }

    // Google Local Post
    if (creative.indexOf("includeGoogleLocalPost") >= 0) {
      this.fs.copy(
        this.templatePath(config.googleLocalPost.template),
        this.destinationPath(config.googleLocalPost.destination)
      );
    }

    // Social Media Ads
    if (socialMediaAds) {
      // Carousel Ads
      if (socialMediaAds.indexOf("socialAdsCarousel") >= 0) {
        this.fs.copy(
          this.templatePath(config.socialAdsCarousel.template),
          this.destinationPath(config.socialAdsCarousel.destination)
        );
      }
      // Standard 16x9 Ad
      if (socialMediaAds.indexOf("socialAdsStandard") >= 0) {
        this.fs.copy(
          this.templatePath(config.socialAdsStandard.template),
          this.destinationPath(config.socialAdsStandard.destination)
        );
      }
    }

    // Social Media Posts
    if (socialMediaPost) {
      // Carousel Post
      if (socialMediaPost.indexOf("socialPostCarousel") >= 0) {
        this.fs.copy(
          this.templatePath(config.socialPostCarousel.template),
          this.destinationPath(config.socialPostCarousel.destination)
        );
      }
      // Standard 16x9 Post
      if (socialMediaPost.indexOf("socialPostStandard") >= 0) {
        this.fs.copy(
          this.templatePath(config.socialPostStandard.template),
          this.destinationPath(config.socialPostStandard.destination)
        );
      }
    }

    // Mailer
    if (creative.indexOf("includeMailer") >= 0) {
      this.fs.copy(
        this.templatePath(config.mailer.template),
        this.destinationPath(config.mailer.destination)
      );
    }

    // Email
    if (creative.indexOf("includeEmail") >= 0) {
      this.fs.copy(
        this.templatePath(config.email.template),
        this.destinationPath(config.email.destination)
      );
    }

    // Website Slider
    if (creative.indexOf("includeWebsiteSlider") >= 0) {
      this.fs.copy(
        this.templatePath(config.websiteSlider.template),
        this.destinationPath(config.websiteSlider.destination)
      );
    }

    // Website Promo
    if (creative.indexOf("includeWebsitePromo") >= 0) {
      this.fs.copy(
        this.templatePath(config.websitePromo.template),
        this.destinationPath(config.websitePromo.destination)
      );
    }

    // Website Landing Page
    if (creative.indexOf("includeWebsiteLandingPage") >= 0) {
      this.fs.copy(
        this.templatePath(config.websiteLandingPage.template),
        this.destinationPath(config.websiteLandingPage.destination)
      );
    }
    
    // VS Networks
      if (creative.indexOf("includeVSNetworks") >= 0) {
        this.fs.copy(
          this.templatePath(config.vsNetworks.template),
          this.destinationPath(config.vsNetworks.destination)
        );
      }

    // UTM Builder
    if (creative.indexOf("includeUTMBuilder") >= 0) {
      this.fs.copy(
        this.templatePath(config.utmBuilder.template),
        this.destinationPath(config.utmBuilder.destination)
      );
    }
  }
};
