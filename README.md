```javascript
class Aedotris {}

class Attributes extends Aedotris {
  get contact() {
    const discord = "aedotris";
    const telegram = "t.me/A3d0tr1sX";
    const facebook = "fb.com/junaidgull.gull.3";
    const email = "contact@levinhkhang.org";

    return [discord, telegram, facebook, email];
  }

  get life() {
    const language = ["Vietnamese", "English"];
    const age = 16;

    return [language, age];
  }

  get coding() {
    const langs = {
      expert: ["python", "typescript", "html", "css"],
      intermediate: [
        "go",
        "js",
        "React.js",
        "Angular.js",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Next.js",
        "Nest.js",
        "Svelte.js",
        "Meteor.js",
        "Ember.js",
        "Backbone.js",
      ],
      learning: ["c", "c++", "c#", "asm", "java"],
    };
    const specialities = ["web/app reverse engineering", "fullstack"];
    const environnement = ["vscode"];

    return [langs, specialities, environnement];
  }
}
```
