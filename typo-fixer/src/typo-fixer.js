
// // Factory Function
// function fixTypo(content){

//     function fixDoubleSpaces()


//     return {
//         content

//     }
// }

// default by language? EN / CA / DE

// Constructor Function
function TypoFixer(){

    this.params = {
        fixDoubleSpaces: true,
        fixWrongQuotes: true,
        fixHyphen: true,
        selectQuotes: ['single', 'double', 'quilemot', 'german'],

    }

    // Ad Space between
    this.spaceMeasure = [
        'm', 'dm', 'cm', 'mm', 
        'kg', 'g',
    ]

    // Ad Space between
    this.noSpaceMeasure = [
        '°C', '%'
    ]

    // 1. check if space before "
    // 2. If space, change to opening “
    // 3. Replace following " sign by “

    // –––––––––––– W R O N G   S P A C E S ––––––––––––

    function fixSpaces(content){
        
    }

    // –––––––––––– H Y P H E N ––––––––––––

    function fixHyphen(content){

        var emDash = '—';
        var enDash = '–';
        var hyphen = '\u2010';
        var nonBreakingHyphen = '\u2011';
        var figureDash = '\u2012';
        var enDash = '\u2013';
        var emDash = '\u2014';
        var hyphenMinus = '\u002D';

        var plus = '+';

        var optionalSpace = '[\\s*]?';
        var enclosingNumbers = '([0-9]+)';

        var replacerDash = emDash;

        var dashes = [hyphen, nonBreakingHyphen, figureDash, enDash, emDash, hyphenMinus]; 

        // join Dashes
        dashes = dashes.join('');

        // regex for dashes
        dashes = `[${dashes}]+`;

        var regex = new RegExp(enclosingNumbers + "(" + optionalSpace + dashes + optionalSpace + ")" + enclosingNumbers, "g");
        console.log(regex);

        // Replace the Dash:
        var content = content.replace(regex, `$1${replacerDash}$3`);

        console.log('fixHyphen');
        return content;
    }

    // –––––––––––– D O U B L E   S P A C E S ––––––––––––

    function fixDoubleSpaces(content){
        var content = content.replace(/  +/g, ' ');
        console.log('fixDoubleSpaces');
        return content;
    }

    function checkIfFontHasGlyphs(){

    }

    this.fix = function(content){
        console.log('Fixed Content:')
        content = this.params.fixHyphen ? fixHyphen(content) : false;
        content = this.params.fixDoubleSpaces ? fixDoubleSpaces(content) : false;
        console.log(content);
        return content;
    }

    // Object.defineProperty(this, 'defaultLocation', {
       
    // });
}

const data = 'This is a Test Text';




// var mySwiper = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100
// });