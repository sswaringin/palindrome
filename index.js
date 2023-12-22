module.exports = Phrase;

// Adds 'reverse' to all strings.
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        return this.content.toLowerCase();
    }

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }
    
    // Returns the letters in the content.
    this.letters = function letters() {
        const lettersRegEx = /[a-z]/gi;
        return (this.content.match(lettersRegEx) || []).join("");
    }

    // Returns true for a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }

    // Makes the phrase LOUDER.
    this.louder = function() {
        return this.content.toUpperCase();
    }

}