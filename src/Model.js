
export default class Model {
    constructor({comments = [], posts = [], authorName = null} = {}) {
        this.comments = comments;
        this.posts = posts;
        this.authorName = authorName;
    }

    getPosts() {
        return Promise.resolve(this.posts.sort((a, b) => b.id - a.id));
    }

    addPost(data) {
        data.id = this.posts.length + 1;
        data.name = this.authorName;

        this.posts.push(data);
        return Promise.resolve(data.id);
    }

    getComments(postId) {
        let comments = this.comments
            .filter(c => c.postId == postId);
        return Promise.resolve(comments);
    }

    addComment(postId, data) {
        data.id = this.comments.length + 1;
        data.name = this.authorName;
        data.postId = postId;
        this.comments.push(data);
        return Promise.resolve(data.id);
    }

    authenticate(user) {
        this.authorName = user;
        return Promise.resolve(user.name != "");
    }

    logout() {
        this.authorName = null;
        return Promise.resolve(true);
    }
}
