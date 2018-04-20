var inquirer = require('inquirer')
function Chapter(id, text) {
    this.text = text;
    this.id = id;
    this.choice_array = [];
    this.add_choice = function (text, link) {//, func) {
        this.choice_array.push({
            name: text, 
            value: link
        })
    }
}
var chapters = []
var chapter = new Chapter(0, "You come across a troll on a bridge. What do you do?")
chapter.add_choice("Try talking to the troll", 1)
chapter.add_choice("Fight the troll", 2)
chapter.add_choice("Burn down the bridge", 3)
chapters.push(chapter)
chapter = new Chapter(1, "What tone do you take while talking to the troll?")
chapter.add_choice("Polite and inquisitive", 4)
chapter.add_choice("Brief; just pay the toll immediately", 5)
chapter.add_choice("Rude and inconvenienced", 6)
chapters.push(chapter)
chapter = new Chapter(2, "You are feeling feisty today and decide to fight the troll. You reach into your backpack and realize you forgot your favorite samurai sword, and also that you learned combat from the Ninja Turtles. Inside your backpack you find the following weapons. Which one do you choose?")
chapter.add_choice("Rabid Badger tied to a stick", 7)
chapter.add_choice("Club (of the sandwhich variety)", 8)
chapter.add_choice("Rubber Ducky", 9)
chapters.push(chapter)
chapter = new Chapter(3, "The troll, seeing his life's work destroyed, leaves to join a coding bootcamp. You rebuild the bridge, fireproofing it of course, and you become...")
chapter.add_choice("...", 10)
//chapter.add_choice("11", 11)
//chapter.add_choice("12", 12)
chapters.push(chapter)
chapter = new Chapter(4, "You speak: 'Good day!' the Troll acknowleges you only with a grunt, but you press on: 'I don't mean to intterupt, I was curious if...'")
chapter.add_choice("'...You've seen my goats?'", 13)
chapter.add_choice("'...you know of any secret treasures?", 14)
chapter.add_choice("'...you would like to be best friends'", 15)
chapters.push(chapter)
chapter = new Chapter(5, "The troll, bewildered, looks at you as he takes your money, he stands aside and gestures, letting you by.")
chapter.add_choice("Cross the bridge", 16)
chapter.add_choice("Cross the bridge, pushing the troll off as you pass", 17)
chapter.add_choice("Converse with the troll", 1)
chapters.push(chapter)
chapter = new Chapter(6, "'Why are you in my way?! MOVE!' you exclaim at the troll. The troll's brow furrows, yet he only grunts in response.")
chapter.add_choice("Continue berating the troll", 19)
chapter.add_choice("Shove the troll aside and continue on", 16)
chapter.add_choice("Storm across the bridge without another word", 16)
chapters.push(chapter)
chapter = new Chapter(7, "As you reach into your bag the badger bites. Hard.")
chapter.add_choice("Ask the troll if he knows where a doctor and/or wizard might be", 22)
chapter.add_choice("Bite the badger back", 23) //badger respects you and becomes your sidekick, he talks
chapter.add_choice("Pretend that you were just rummaging in your bag and nothing happened as you walk around the troll and across the bridge", 16)
chapters.push(chapter)
chapter = new Chapter(8, "As you pull the club sandwich out, you realize you're starving. The troll is staring at you as you hold the sandwich out")
chapter.add_choice("Continue using the sandwich as a weapon and beat the troll about the head with it", 25)
chapter.add_choice("Eat the sandwhich", 26) //you are now full, the troll is still staring. How do you proceed? [provide same options as decision#1]
chapter.add_choice("Offer the troll the sandwich", 27)
chapters.push(chapter)
chapter = new Chapter(9, "You pull your mighty rubber ducky from your bag and raise it over your head as it glows, a bolt of lightning out of the clear sky strikes the rubber duck and you swing, easily felling the troll")
chapter.add_choice("28", 28)
chapter.add_choice("29", 29)
chapter.add_choice("30", 30)
chapters.push(chapter)
chapter = new Chapter(10, "THE RICK TROLL'D")
chapter.add_choice("31", 31)
chapter.add_choice("32", 32)
chapter.add_choice("33", 33)
chapters.push(chapter)
chapter = new Chapter(13, "11")
chapter.add_choice("34", 34)
chapter.add_choice("35", 35)
chapter.add_choice("36", 36)
chapters.push(chapter)
chapter = new Chapter(12, "12")
chapter.add_choice("37", 37)
chapter.add_choice("38", 38)
chapter.add_choice("39", 39)
chapters.push(chapter)
var chapter = function (id) {
    inquirer.prompt([
        {
            name: "decision",
            type: "list",
            message: chapters[id].text,
            choices: chapters[id].choice_array
        }
    ]).then(function (res) {
        chapter(parseInt(res.decision))
    })
}
chapter(0)