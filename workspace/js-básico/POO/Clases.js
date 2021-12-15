class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            facebook,
            instagram
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "Juandc",
    username: "juanitodc",
    email: "juanito@ga",
    twitter: "fjuandc"
});

const juan3 = new Student({
    name: "Juand3c",
    username: "juanitodc3",
    email: "juanit3o@ga",
    instagram: "fjuand3c"
});