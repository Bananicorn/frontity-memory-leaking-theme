const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": process.env.FRONTITY_SOURCE_URL,
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@wunderfarm/empty-theme",
      "state": {
        "theme": {
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": process.env.FRONTITY_SOURCE_URL
        }
      }
    },
    "@frontity/tiny-router",
  ]
};

export default settings;
