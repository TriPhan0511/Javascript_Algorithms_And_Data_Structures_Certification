/**
 * 02 - MATCH LITERAL STRINGS
 */
// let string = 'Hello, my name is Kevin';

// console.log(/Kevin/.test(string));
// // true
// console.log(/kevin/.test(string));
// // false
// console.log(/KEVIN/.test(string));
// false
// -----------------------------------------------------------------------------------------

/**
 * 03 - MATCH A LITERAL STRING WITH DIFFERENT POSSIBILITIES
 */

/**
 * You can search for multiple patterns using the alternation or OR operator: | .
 *
 * This operator matches patterns either before or after it. For example, if you wanted to match
 * the strings yes or no, the regex you want is /yes|no/.
 *
 * You can also searc for more than just two patterns. You can do this by adding more patterns
 * with more OR operators separating them, like /yes|no|maybe/ .
 */

// let string = 'James has a pet cat';
// let re = /dog|cat|bird|fish/;

// console.log(re.test(string));
// // true
// console.log(re.exec(string));
// // ['cat', index: 16]
// -----------------------------------------------------------------------------------------

/**
 * 04 - IGNORE CASE WHILE MATCHING
 */

/**
 * Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you
 * might want to also match case differences.
 *
 * Case (or something letter case) is the difference between uppercase and lowercase letters.
 * Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.
 *
 * You can match both cases using what is called a flag. There are another flags but here you'll
 * focus on the flag that ignores case - the i flag. You can use it by appending it to the regex.
 * An example of using this flag is /ignorecase/i . This regex can match the strings ignorecase,
 * igNoreCase, and IgnoreCase.
 */

// let string = 'freeCodeCamp';
// let re = /freecodecamp/i;

// console.log(re.test(string));
// // true
// -----------------------------------------------------------------------------------------

/**
 * 05 - EXTRACT MATCHES
 */

/**
 * So far, you have only been checking if a pattern exists or not within a string. You can also extract
 * the actual matches you found with the match() method.
 *
 * To use the match() method, apply the method on a string and pass in the regex inside the parentheses.
 */

// console.log('Hello, world'.match(/hello/i));
// // ["Hello"]
// console.log('Aloha, word'.match(/hello/i));
// // null

/**
 * Note that the match() syntax is the "opposite" of the test() method.
 * (match is a method of string, and test is a method of regular expression object.)
 */

// 'Hello, world'.match(/hello/);
// /hello/.test('Hello. world');
// -----------------------------------------------------------------------------------------

/**
 * 06 - FIND MORE THAN THE FIRST MATCH
 */

/**
 * So far, you have only been able to extract or search a pattern once.
 */

// console.log('Repeat, Repeat, Repeat'.match(/Repeat/));
// // ["Repeat"]

/**
 * To search or extract a pattern more than once, you can use the g flag.
 */

// console.log('Repeat, Repeat and Repeat'.match(/Repeat/g));
// // ["Repeat", "Repeat", "Repeat"]

// Example: Using regex starRegex, find and extract both Twinkle words from the string twinkleStar
// let twinkleStar = 'Twinkle, twinkle, little star.';
// let starRegex = /twinkle/gi;

// console.log(twinkleStar.match(starRegex));
// // ["Twinkle", "twinkle"]
// -----------------------------------------------------------------------------------------

/**
 * 07 - MATCH ANYTHING WITH WILDCARD PERIOD
 */

/**
 * Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of
 * all words that match, say, a misspelling would take a long time. Luckily, you can save time using
 * the wildcard charater: .
 *
 * The wildcard character . will match any one character. The wilcard is also called dot or period.
 * You can use the wildcard character just like any other character in the regex. For example, if you
 * want to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
 */

// let re = /hu./;

// console.log(re.test("I'll hum a song"));
// // true
// console.log(re.test('Bear hug'));
// // true
// -----------------------------------------------------------------------------------------

/**
 * 08 - MATCH SINGLE CHARACTER WITH MULTIPLE POSSIBILITIES
 */

/**
 * You learned how to match literal pattern (/literal/) and wildcard character (/./).
 * Those are the extrems of regular expressions, where one finds exact matches and the other
 * matches everything. There are options that are a balance between the two extremes.
 *
 * You can search for a literal pattern with some flexibility with character classes.
 * Character classes allow you to define a group of characters you wish to match by
 * placing them inside square brackets ([]).
 *
 * For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]b/
 * to do this. The [aiu] is the character class that will only match the characters a, i or u.
 */

// let re = /b[aiu]g/;

// console.log('bag'.match(re));
// // ["bag"]
// console.log('big'.match(re));
// // ["big"]
// console.log('bug'.match(re));
// // ["bug"]
// console.log('bog'.match(re));
// // null

// let quoteSample = 'Beware of bugs in the above code; I have only proved it correct, not tried it.';
// let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex);
// console.log(result);
// // ["e", "a", "e", "o", "u", "i", "e", "a", "o", "e", "o", "e", "I", "a", "e", "o", "o", "e", "i", "o", "e", "o", "i", "e", "i"]
// -----------------------------------------------------------------------------------------

/**
 * 09 - MATCH LETTERS OF THE ALPHABET
 */

/**
 * You saw how you can use character sets to specify a group of characters to match,
 * but that's a lot of typing when you need to match a large range of characters (for example,
 * every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
 *
 * Inside a character set, you can define a range of characters to match using
 * a hyphen character: - .
 *
 * For example, to match lowercase letters a through e you would use [a-e]:
 */

// let re = /[a-e]at/;
// console.log('cat'.match(re));
// // ["cat"]
// console.log('bat'.match(re));
// // ["bat"]
// console.log('mat'.match(re));
// // null

// Example: Match all letters in the string quoteSample
// (Note: Be sure to match both uppercase and lowercase letters)

// let quoteSample = 'The quick brown fox jumps over the lazy dog.';
// let re = /[a-z]/gi;
// console.log(quoteSample.match(re));

// console.log(quoteSample.match(re).length);
// -----------------------------------------------------------------------------------------

/**
 * 10 - MATCH NUMBERS AND LETTERS OF THE ALPHABET
 */

/**
 * Using the hyphen (-) to match a range of characters is not limited to the letters. It also works to match
 * a range of numbers.
 *
 * For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
 *
 * Also, it is possible to combine a range of letters and numbers in a single character set.
 */

// let re = /[a-z0-9]/gi;
// console.log('Jenny8765309'.match(re));
// // ["J", "e", "n", "n", "y", "8", "7", "6", "5", "3", "0", "9"]
// -----------------------------------------------------------------------------------------

/**
 * 11 - MATCH SINGLE CHARACTERS NOT SPECIFIED
 */

/**
 * So far, you have created a set of characters that you want to match, but you could also create
 * a set of characters that you do not want to match. These types of character sets are called
 * negated character sets.
 *
 * To create a negated character set, you place a caret character (^) after the opening bracket and
 * before the characters you do not want to match.
 *
 * For example, /[^aeiou/gi matches all characters that are not a vowel. Note that characters
 * like . , ! , [ , @ , / and white space are matched - the negated vowel character set only
 * excludes the vowel characters.
 */
// -----------------------------------------------------------------------------------------

/**
 * 12 - MATCH CHARACTERS THAT OCCUR ONE OR MORE TIMES
 */

/**
 * Sometimes, you need to match a character (or group of characters) that appears one or more times
 * in a row. This means it occurs at least once, and may be repeated.
 *
 * You can use the + character to check if that is the case. Remember, the character or pattern has to
 * be present consecutively. That is, the character has to repeat one after the other.
 *
 * For example, /a+/g would find one match in 'abc' and return ["a"]. Because of the +, it would also
 * find a single match in 'aab' and return ["aa"].
 *
 * If it were instead checking the string 'abab', it would find two matches ang return ["a", "a"]
 * because the a characters are not in the row - there is a b between them. Finally, since there is no
 * a in the string 'bcd', it wouldn't find a match.
 */

// console.log('abc'.match(/a+/g));
// // ["a"]
// console.log('aabc'.match(/a+/g));
// // ["aa"]
// console.log('abab'.match(/a+/g));
// // ["a", "a"]
// console.log('bcd'.match(/a+/g));
// // null
// -----------------------------------------------------------------------------------------

/**
 * 13 - MATCH CHARACTERS THAT OCCUR ZERO OR MORE TIMES
 */

/**
 * The last challenge used the plus + sign to look for characters that occur one or more times.
 * There's also an option that matches characters that occur zero or more times.
 *
 * The character to do this is the asterisk or star: *
 */

// let re = /go*/;
// console.log('goooal'.match(re));
// // ["gooo"]
// console.log('gut feeling'.match(re));
// // ["g"]
// console.log('over the moon'.match(re));
// // null
// -----------------------------------------------------------------------------------------

/**
 * 14 - FIND CHARACTERS WITH LAZY MATCHING
 */

/**
 * In regular expressions, a greedy match finds the longest possible part of a string that
 * fits the regex pattern and returns it as a match. The alternative is called a lazy match,
 * which finds the smallest possible part of the string that satifies the regex pattern.
 *
 * You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern
 * that starts with t, ends with i, and has some letters in between.
 *
 * Regular expressions are default greedy, so the match would return ["titani"]. It finds the
 * largest sub-string possible to fit the pattern.
 *
 * However, you can use the ? character to change it to lazy matching. "titanic" matched against
 * the adjusted regex of /t[a-z]*?i/ returns ["ti"].
 *
 * NOTE: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string
 * with regular expression is completely fine.
 */

// // let re = /t[a-z]*i/;
// // console.log('titanic'.match(re));
// // // ["titani"]

// // LAZY MATCHING
// let re2 = /t[a-z]*?i/;
// console.log('titanic'.match(re2));
// // ["ti"]

// // Example: Fix the regex to return the HTML tag <h1> and not text "<h1>Winter is comming</h1>"
// let text = '<h1>Winter is comming</h1>';
// let re = /<h.*?>/i;
// console.log(text.match(re));
// // ["<h1>"]
// -----------------------------------------------------------------------------------------

/**
 * 15 - FIND ONE OR MORE CRIMINALS IN A HUNT
 */

// let re = /z+/; // Matches the letter z when it appears one or more times in a row.

// console.log('z'.match(re));
// // ["z"]
// console.log('zzzzzz'.match(re));
// // ["zzzzzz"]
// console.log('ABCzzzz'.match(re));
// // ["zzzz"]
// console.log('zzzzABC'.match(re));
// // ["zzzz"]
// console.log('abczzzzzabc'.match(re));
// // ["zzzzz"]

// console.log(''.match(re));
// // null
// console.log('ABC'.match(re));
// // null
// console.log('abcabc'.match(re));
// // null
// -----------------------------------------------------------------------------------------

/**
 * 16 - MATCH BEGINNING STRING PATTERNS
 */

/**
 * Prior challenges showed that regular expressions can be used to look for a number of matches.
 * They are also used to search for a patterns in specific positions in strings.
 *
 * In an earlier challenge, you used the caret character (^) inside a character set to negated
 * character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret
 * is used to search for patterns at the beginning of strings.
 */

// let re = /^Ricky/;

// console.log(re.test('Ricky is first and can be found.'));
// // true
// console.log(re.test("You can't find Ricky now"));
// // false
// -----------------------------------------------------------------------------------------

/**
 * 17 - MATCH ENDING STRING PATTERNS
 */

/**
 * In the last challenge, you learned to use the caret character to search for patterns at
 * the beginning of strings.
 * There is also a way to search for patterns at the end of strings.
 *
 * You can search the end of strings using the dollar sign character ($) at the end of regex.
 */

// let re = /story$/;

// console.log(re.test('This is a never ending of story'));
// // true
// console.log(re.test('Sometimes a story will have to end.'));
// // false
// -----------------------------------------------------------------------------------------

/**
 * 18 - MATCH ALL LETTERS AND NUMBERS
 */

/**
 * Using character classes, you were able to search for all letters of the alphabet with [a-z].
 * This kind of charcter class is common enough that there is a shortcut for it, although it
 * includes a few extra characters as well.
 *
 * The closest character class in Javascript to match the alphabet is \w. This shortcut is equal
 * to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note,
 * this character class also includes the underscore character (_).
 */

// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = '42';
// let varNames = 'important_var';

// console.log(longHand.test(numbers));
// // true
// console.log(shortHand.test(numbers));
// // true
// console.log(longHand.test(varNames));
// // true
// console.log(shortHand.test(varNames));
// // true

/**
 * These shortcut character classes are also known as shorthand character classes.
 */
// -----------------------------------------------------------------------------------------

/**
 * 19 - MATCH EVERYTHING BUT LETTERS AND NUMBERS
 */

/**
 * You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w.
 * A natural pattern you might want to search for is the opposite of alphanumerics.
 *
 * You can search for the opposite of the \w with \W. Note, the opposite pattern uses a
 * capital letter. This shortcut is the same as [^A-Za-z0-9_].
 */

// let shortHand = /\W/;
// console.log('42%'.match(shortHand));
// // ["%"]
// console.log('Coding!'.match(shortHand));
// // ["!"]

// console.log('The total is 45%'.match(/\W/g));
// //  [" ", " ", " ", "%"]
// -----------------------------------------------------------------------------------------

/**
 * 20 - MATCH ALL NUMBERS
 */

/**
 * You've learned shortcuts for common string patterns like alphanumeric. Another commnon pattern
 * is looking for just digits or numbers.
 *
 * The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the
 * character class [0-9], which looks for a single character of any number between zero and nine.
 */

// console.log('2001: A Space Odyssey'.match(/\d/g));
// // ["2", "0", "0", "1"]
// -----------------------------------------------------------------------------------------

/**
 * 21 - MATCH ALL NON-NUMBERS
 */

/**
 * The last challenge showed how to search for digits using the shortcut \d with a lowercase d.
 * You can also search for non-digits using a similar shortcut that uses an uppercase D instead.
 *
 * The shortcut to look for non-digit character id \D.This is equal to the character class [0-9],
 * which looks for a single character that is not a number betwen zero and nine.
 */

// console.log('2001: A Space Odysaey'.match(/\D/g).length);
// // 17
// -----------------------------------------------------------------------------------------

/**
 * 22 - RESTRICT POSSIBLE USERNAMES
 */

/**
 * Usernames are used everywhere in the internet. They are what give users a unique identity on
 * their favorite sites.
 *
 * You need to check all usernames in a database. Here are somme simple rules that users have to
 * follow when creating their username.
 *
 *  1. Usernames can only use alphanumeric characters.
 *  2. The only numbers in the username have to be at the end. There can be zero or more of
 *      them at the end. Username cannot start with the number.
 *  3. Username letters can be lowercase and uppercase.
 *  4. Usernames have to at least two characters long. A two-character username can only use
 *      alphabet letters as characters.
 */

// // Solution 1:
// // let userCheck = /^[a-z]{2,}[0-9]*$|^[a-z]\d{2,}$/i;
// // Solution 2:
// let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i;

// console.log(userCheck.test('J'));
// // should return false

// console.log(userCheck.test('A1'));
// // should return false

// // console.log(userCheck.test('BadUs3rnam3'));
// // should return false

// console.log(userCheck.test('c57bT3'));
// // should return false

// console.log(userCheck.test('J%4'));
// // should return false

// console.log(userCheck.test('Z97'));
// // should return true
// -----------------------------------------------------------------------------------------

/**
 * 23 - MATCH WHITESPACE
 */

/**
 * The challenges so far have covered matching letters letters of the alphabet and numbers.
 * You can also match the whitespace or spaces between letters.
 *
 * You can search for whitespace using \s, which is a lowercase s. This pattern not only matches
 * whitespace, but also carriage return, tab, form feed, and new line charcaters. You can think of
 * it as similar to the character class [\r\t\f\n\v]
 */

// console.log('Whitespace. Whitespace everywhere!'.match(/\s/g));
// // [" ", " "]
// -----------------------------------------------------------------------------------------

/**
 * 24 - MATCH NON-WHITESPACE CHARACTERS
 */

/**
 * You learned about searching for whitespace using \s, with a lowercase s. You can also search
 * for everything except whitespace.
 *
 * Search for non-whitespace using \S, which is an uppercase s. This pattern will not match
 * whitespace, carriage return, tab, form feed, and new line characters. You can think of it being
 * similar to the character class [^\r\t\f\n\\v].
 */

// console.log('Whitespace. Whitespace everywhere!'.match(/\S/g).length);
// // 32
// -----------------------------------------------------------------------------------------

/**
 * 25 - SPECIFY UPPER AND LOWER NUMBER OF MATCHES
 */

/**
 * Recall that you use the plus sign + to look for one and more characters and the
 * asterisk * to look for zero or more characters. These are convenient but sometimes
 * you want to match a certain range of patterns.
 *
 * You can specify the lower and upper number of paaterns with quantity specifiers.
 * Qunatity specifiers are used with curly braces ({}). You put two numbers between
 * the curly braces - for the lower and upper number of patterns.
 *
 * For example, to match only the letter a appearing between 3 and 5 times in the
 * string "ah"
 */

// let re = /a{3,5}h/;

// console.log(re.test('ah'));
// // false
// console.log(re.test('aaah'));
// // true
// console.log(re.test('aaaah'));
// // true
// console.log(re.test('aaaah'));
// // true
// console.log(re.test('aaaaaaaaah'));
// // true
// -----------------------------------------------------------------------------------------

/**
 * 26 - SPECIFY ONLY THE LOWER NUMBER OF MATCHES
 */

/**
 * You can specify the lower and upper number of patterns with quantity specifiers using
 * curly braces. Sometimes you only want to specify the lower number of patterns with no upper limit.
 *
 * To only specify the lower number of patterns, keep the first number followed by an comma.
 * 
 * For example, to match only the string "hah" with the letter a appearing at least 3 times,
 * your regex:

 */

// let re = /ha{3,}h/;

// console.log(re.test('hah'));
// // false
// console.log(re.test('haah'));
// // false
// console.log(re.test('haaah'));
// // true
// console.log(re.test('haaaaaaaaaaah'));
// // true

// let a100 = 'h' + 'a'.repeat(100) + 'h';
// console.log(re.test(a100));
// // true
// -----------------------------------------------------------------------------------------

/**
 * 27 - SPECIFY EXACT NUMBER OF MATCHES
 */

/**
 * You can specify the lower and upper number of patterns with quatity specifiers using
 * curly braces. Sometimes you only want a specific number of matches.
 *
 * To specify a certain number of patterns, just have that one number between the curly braces.
 *
 * For example, to match only the word "hah" with the letter a 3 times, you regex would be /ha{3}h/.
 */

// let re = /ha{3}h/;

// console.log(re.test('haah'));
// // false
// console.log(re.test('haaah'));
// // true
// console.log(re.test('haaaah'));
// // false
// -----------------------------------------------------------------------------------------

/**
 * 28 - CHECK FOR ALL OR NONE
 */

/**
 * Sometimes the patterns you want to search for may have parts of it that may or may not exist.
 * However, it may be important to check for them nonetheless.
 *
 * You can specify the possible existence of an element with a question mark, ?. This checks
 * for zero or one of the preceding element. You can think of this symbol as saying the previous
 * element is optional.
 *
 * For example, there are slight differences in American and British English and you can use the
 * question mark to match both spellings.
 */

// let re = /colou?r/;

// console.log(re.test('color'));
// // true
// console.log(re.test('colour'));
// // true

// console.log(re.test('colouur'));
// // false
// -------------------------------

// let re = /favou?rite/;

// console.log(re.test('favorite'));
// // true
// console.log(re.test('favourite'));
// // true
// -----------------------------------------------------------------------------------------

/**
 * 29 - POSITIVE AND NEGATIVE LOOKAHEAD
 */

/**
 * Lookaheads are patterns that tell Javascript to look-ahead in your string to check for patterns
 * further along. This can be useful when you want to search for multiple patterns over the same string.
 *
 * There are two kinds of lookaheads: positive lookahead and negative lookahead.
 *
 * A positive lookahead will look to make sure the element in the search pattern is there,
 * but won't actually match. A positive lookahead is used as (?=...) where the ... is the required part
 * that is not matched.
 *
 * On the other hand, a negative lookahead will look to make sure the element in the search pattern
 * is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not
 * want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
 */

// let quit = 'qu';
// let noquit = 'qt';

// let quRegex = /q(?=u)/;
// let qRegex = /q(?!u)/;

// console.log(quit.match(quRegex));
// // ["q"]
// console.log(noquit.match(qRegex));
// // ["q"]
// -----------------------------------------------------

// // Example: Positive lookahead
// console.log('qu'.match(/q(?=u)/));
// // ["q"]
// console.log('qt'.match(/q(?=u)/));
// // null

// // Example: Negative lookahead
// console.log('qu'.match(/q(?!u)/));
// // null
// console.log('qt'.match(/q(?!u)/));
// // ["q"]
// -----------------------------------------------------

// Example: Check two or more patterns in one string. Here is a (naively) simple password checker
// that looks for between 3 and 6 characters and at least one number:

// let pwChecker = /(?=\w{3,6})(?=\D*\d)/;

// console.log(pwChecker.test('abc123'));
// // true
// console.log(pwChecker.test('a1'));
// // false
// console.log(pwChecker.test('aaa'));
// // false
// console.log(pwChecker.test('1aa'));
// // true
// -----------------------------------------------------

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long,
// and have two consecutive digits.

// let pwRegex = /(?=\w{6,})(?=\D*\d{2}\D*)/;

// console.log(pwRegex.test('abcd12'));
// // true

// console.log(pwRegex.test('123456'));
// // true

// console.log(pwRegex.test('abcdef'));
// // false

// console.log(pwRegex.test('b12cd'));
// // false

// console.log(pwRegex.test('abcde1'));
// // false

// console.log(pwRegex.test('1abcd2'));
// // false
// -----------------------------------------------------------------------------------------

/**
 * 30 - CHECK FOR MIXED GROUPING OF CHARACTERS
 */

/**
 * Sometimes we want to check for groups of characters using a Regular Expression and to achieve
 * that we use parentheses ().
 *
 * If you want to find either "Penguin" or "Pumpkin" in a string, you can use the following
 * regular expression: /P(engu|umpk)in/
 */

// let re = /P(engu|umpk)in/;

// console.log(re.test('Penguin'));
// // true
// console.log(re.test('Pumpkin'));
// // true
// -----------------------------------------------------------------------------------------

/**
 * 31 - REUSE PATTERNS USING CAPTURE GROUPS
 */

/**
 * Some patterns you search for will occur multiple times in a string. It is wasteful to
 * manually repeat that regex. There is a better way to specify when you have mutiple repeat
 * substrings in your string.
 *
 * You can search for repeat substrings using capture groups. Parentheses (), are used to find
 * repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.
 *
 * To specify where that repeat string will appear, you use a backslash (\) an then a number.
 * This number starts at 1 and increases with each additional capture group you use
 */

// Example: Use regular expression to match a string that consists of only the same number repeated
// exactly three times separated by singe spaces.

// let re = /^(\d+)(\s)\1\2\1$/;

// console.log('42 42 42'.match(re));
// // ["42 42 42", "42", " "]
// console.log('100 100 100'.match(re));
// // ["100 100 100", "100, " "]
// console.log('42 42 42 42'.match(re));
// // null
// -------------------------------------------------------

// // The example above below matches any word that occurs twice separated by a space:
// let repeatStr = /(\w+)\s\1/;

// console.log('regex regex'.match(repeatStr));
// // ["regex regex", "regex", index: 0, input: "regex regex", groups: undefined]

// -------------------------------------------------------

// let re = /(test)\s\1/;
// let literalRe = /test\stest/;

// console.log('test test test'.match(re));
// // ["test test", "test"]

// console.log('test test test'.match(literalRe));
// // ["test test"]
// -------------------------------------------------------

// let re = /(test)(\s)\1\2\1/;
// console.log('test test test'.match(re));
// // ["test test test, "test", " "]
// -------------------------------------------------------

// let re = /(test)(\s)\1\2\1/;

// console.log('test test test'.match(re));

// console.log('abc c b a'.match(/(a)(b)(c)(\s)\3\4\2\4\1/));
// -----------------------------------------------------------------------------------------

/**
 * 32 - USE CAPTURE GROUPS TO SEARCH AND REPLACE
 */

/**
 * Searching is useful. However, you can make searching even more powerful when it is also changes
 * (or replace) the text you match.
 *
 * You can search and replace text in a string using .replace() on a string.
 * The inputs for .replace() is first the regex pattern you want to search for.
 * The second parameter is the string to replace the match or function to do something.
 */

// console.log('The sky is silver.'.replace(/silver/, 'blue'));
// // The sky is blue.

/**
 * You can also capture group in the replacement string with dollar sign ($).
 */

// console.log('Code Camp'.replace(/(\w+) (\w+)/, '$2 $1'));
// // Camp Code
// ----------------------------------------------------------

// console.log('one two three'.replace(/(\w+) (\w+) (\w+)/, '$3 $2 $1'));
// // three two one
// -----------------------------------------------------------------------------------------

/**
 * 33 - REMOVE WHITESPACE FROM START AND END
 */

// console.log('Hello, world');
// console.log(/^\s\w+\s$/.test(' Helloworld '));
// // true
// console.log(/^(\s)(\w+)(\s)$/.exec(' Helloworld '));
// // [" Helloworld ", " ", "Helloworld", " ", index: 0, input: " Helloworld ", groups: undefined]

// console.log(' Helloworld '.replace(/^(\s)(\w+)(\s)$/, '$2'));
// console.log(' Hello, world '.replace(/^(\s)(\w+)(\s)$/, '$2'));

// console.log('  Hello, world'.replace(/^\s+|\s+$/g, ''));
// -----------------------------------------------------------------------------------------

console.log('titanic'.match(/t[a-z]*i/));
// ["titani", index: 0, input: "titanic", groups: undefined]

console.log('titanic'.match(/t[a-z]*?i/));
// ["ti", index: 0, input: "titanic", groups: undefined]
