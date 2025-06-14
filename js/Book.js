export class Book {
    constructor(title, author, pageNumber, readStatus) {
        this.title = title;
        this.author = author;
        this.pageNumber = pageNumber;
        this.readStatus = readStatus;
    }
    showTitle() {
        return this.title;
    }
    showAuthor() {
        return this.author;
    }

    showPages() {
        return this.pageNumber;
    }
    showReadStatus() {
        // This will return the string 'Read' or 'Unread'
        return this.readStatus;
    }
    toggleReadStatus() {
        // Toggles between the string 'Read' and 'Unread'
        this.readStatus =
            this.readStatus === 'Read'
                ? 'Unread'
                : 'Read';
    }
}