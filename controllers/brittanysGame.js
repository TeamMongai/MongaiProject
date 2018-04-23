//var inquirer = require('inquirer')
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
var chapter = new Chapter(0, `Once upon a time you were a master goat herder.<br><br>Now look at you. Stuck in a forest, searching for your goats. SAD.<br><br>Every now and then a bird calls out and you jump, momentarily questioning the wisdom of running into a dark forest on your own. Even if it was to reclaim the much sought-after title of "Master Goat Herder".<br>But you totally brought weapons, so it's okay. At least, you're pretty sure you did.<br><br>Now is no time to check though, you're busy exploring a dark forest, so instead you press on...`)
chapter.add_choice(`Continue`, 1)
chapters.push(chapter)
//------------------
chapter = new Chapter(1, `The sound of rushing water can be heard up ahead of you, and you see a clearing. You run forward, eager to get a drink. Your grandpa told you before you left that dehydration was a dangerous thing, after all.<br><br>In the clearing you are disappointed to find a troll guarding a bridge. He's covered in moss and has eyes like igneous rocks. That's all you really need to know, right? He's a troll.<br><br>In a gravely voice he says, "Pay up, human, or you can't cross."<br><br>What do you do?`)
chapter.add_choice(`Try talking to the troll`, 2)
chapter.add_choice(`Fight the troll`, 3)
chapter.add_choice(`Burn the bridge`, 4)
chapters.push(chapter)
//------------------
chapter = new Chapter(2, `What tone do you take while talking to the troll?`)
chapter.add_choice(`Polite and inquisitive`, 6)
chapter.add_choice(`Impatient; just pay the toll immediately`, 7)
chapter.add_choice(`Rude and inconvenienced`, 8)
chapters.push(chapter)
//------------------
chapter = new Chapter(3, `You are feeling feisty today and decide to fight the troll.<br><br>You reach into your backpack and realize you forgot your favorite samurai sword, and also that you learned combat from watching The Ninja Turtles. Handstands are still really hard for you. But you keep trying.<br><br>Inside your backpack you find the following weapons. Which one do you choose?`)
chapter.add_choice(`Rubber duck`, 11)
chapter.add_choice(`Rabid badger tied to a stick`, 9)
chapter.add_choice(`Club (of the sandwich variety)`, 10)
chapters.push(chapter)
//------------------
chapter = new Chapter(4, `The troll, seeing his life's work destroyed, leaves to join a coding bootcamp.<br><br>You rebuild the bridge, fireproofing it of course, and become...`)
chapter.add_choice(`...the most infamous of trolls...`, 5)
chapters.push(chapter)
//------------------
chapter = new Chapter(5, `THE RICK TROLL and gif`)
//ending
chapters.push(chapter)
//------------------
chapter = new Chapter(6, `You speak: "Good day!" The troll acknowledges you only with a grunt, but you press on. "I don't mean to interrupt. I was curious if..."`)
chapter.add_choice(`"...you've seen my goats?"`, 15)
chapter.add_choice(`"...you know of any secret treasures?"`, 13)
chapter.add_choice(`"...you would like to be best friends?"`, 14)
chapters.push(chapter)
//------------------
chapter = new Chapter(7, `You shrug. "Mo' money, mo' problems."<br><br>The troll, bewildered, looks at you as he takes your money. He stands aside and gestures, letting you by.`)
chapter.add_choice(`Cross the bridge`, 16)
chapter.add_choice(`Cross the bridge, pushing the troll off as you pass`, 17)
chapters.push(chapter)
//------------------
chapter = new Chapter(8, `"Why are you in my way!? MOVE!" you exclaim at the troll.<br><br>The troll's brow furrows, yet he only grunts in response.`)
chapter.add_choice(`Continue berating the troll`, 18)
chapter.add_choice(`Cross the bridge, pushing the troll off as you pass`, 17) 
chapter.add_choice(`Fight the troll`, 3)
chapters.push(chapter)
//------------------
chapter = new Chapter(9, `As you reach into the bag, the badger bites hard.`)
chapter.add_choice(`Ask the troll if he knows where a doctor and/or wizard might be`, 19)
chapter.add_choice(`Bite the badger back`, 20)
chapter.add_choice(`Pretend that you were just rummaging in your bag and nothing happened as you walk around the troll and across the bridge`, 21)
chapters.push(chapter)
//------------------
chapter = new Chapter(10, `As you pull the club sandwich out, you realize you are starving. The troll is staring at you stare at the sandwich in your hands.`)
chapter.add_choice(`Split the sandwich with the troll`, 34)
chapter.add_choice(`Eat the sandwich`, 24)
chapter.add_choice(`Offer the troll the sandwich`, 23)
chapters.push(chapter)
//------------------
chapter = new Chapter(11, `You pull your mighty rubber ducky from your bag and raise it over your head as it glows, a bolt of lightning out of the clear sky strikes the rubber duck and you swing, easily felling the troll.`)
chapter.add_choice(`Family values`, 12)
chapters.push(chapter)
//------------------
chapter = new Chapter(12, `As you stare in disbelief at the fallen troll, you hear a shout of "NOOOO!!!" as his wife and two kids run out from the bushes on the other side of the bridge. Distraught they mourn their father.<br><br>You have only one choice now. Taking responsibility for your actions, you decide to earn the income this family has lost, and take the troll's place on the bridge.<br><br>You become the most feared of all trolls...`)
chapter.add_choice(`...the most infamous of trolls...`, 5)
chapters.push(chapter)
//------------------
chapter = new Chapter(13, `The troll stares at you as if you are an idiot. He speaks slowly, just in case you are. "Yah. That's why I'm standing on a bridge collecting tolls."<br><br>You blink. "Cool. So where is it?"<br><br>The troll sighs and crosses his arms. "The only treasure I know of is the one you're supposed to be paying me."`)
chapter.add_choice(`Pay up`, 7)
chapter.add_choice(`Refuse and fight`, 3)
chapter.add_choice(`Offer a sandwich`, 23)
chapters.push(chapter)
//------------------
chapter = new Chapter(14, `The troll pauses. "Uh, this is awkward. I already have a best friend. Why would I need another one?"`)
chapter.add_choice(`Sob`, 25)
chapters.push(chapter)
//------------------
chapter = new Chapter(15, `"Yes, they tasted delicious!" The troll smacks his lips in clear appreciation. "How did you know pygmy is my favorite? And I mean, my all time favorite."`)
chapter.add_choice(`Horrified, you reach for your weapons`, 3)
chapter.add_choice(`You're flattered by the troll's comments`, 27)
chapter.add_choice(`Mourn your goats`, 26)
chapters.push(chapter)
//------------------
chapter = new Chapter(16, `When you make it to the other side, you realize you forgot to ask a pretty important question of the troll.<br><br>"Heyyyyyyyyyy" you start, slyly. "I was wondering if..."`)
chapter.add_choice(`"...you've seen my goats?"`, 15)
chapter.add_choice(`"...you would like to be best friends?"`, 14)
chapter.add_choice(`Ask the troll if he knows where a doctor and/or wizard might be`, 19)
chapters.push(chapter)
//------------------
chapter = new Chapter(17, `Despite the water being only just barely above the trolls head, you realize he can't swim. He flails about madly.<br><br>You:`)
chapter.add_choice(`Let him drown`, 28)
chapter.add_choice(`Pull him to safety`, 29)
chapter.add_choice(`Throw him the rubber duck in your bag`, 30)
chapters.push(chapter)
//------------------
chapter = new Chapter(18, `"You’re so dumb if you were trapped in a grocery store you would starve to death!" You shout with the deranged, shrill voice of a student with a project due.<br><br>"That's hurtful." says the troll. "Good job. You know what? I like you. I'll let you pass"<br><br>"Really??" you say.<br><br>"Really," says the troll, and steps aside.`)
chapter.add_choice(`Cross the bridge`, 16)
chapters.push(chapter)
//------------------
chapter = new Chapter(19, `Michael`)
// chapter.add_choice(`37`, 37)
// chapter.add_choice(`38`, 38)
// chapter.add_choice(`39`, 39)
chapters.push(chapter)
//------------------
chapter = new Chapter(20, `Michael -- The badger gains respect for you and becomes your companion.`)
// chapter.add_choice(`37`, 37)
// chapter.add_choice(`38`, 38)
// chapter.add_choice(`39`, 39)
chapters.push(chapter)
//------------------
chapter = new Chapter(21, `Michael`)
// chapter.add_choice(`37`, 37)
// chapter.add_choice(`38`, 38)
// chapter.add_choice(`39`, 39)
chapters.push(chapter)
//------------------
chapter = new Chapter(22, `Michael`)
// chapter.add_choice(`37`, 37)
// chapter.add_choice(`38`, 38)
// chapter.add_choice(`39`, 39)
chapters.push(chapter)
//------------------
chapter = new Chapter(23, `The troll takes it from you, grumbling that human food is gross. After taking the first bite, however, he pauses and his eyes widen.<br><br>"Sandwiches...sandwiches. This is what my life has been missing. All this time...Trolls would love this!" He turns to you, lettuce caught in his sharp teeth. "Can you get more of these??"<br><br>"More sandwiches?"<br><br>"Yes!"<br><br>You reply:`)
chapter.add_choice(`"I think so"`, 31)
chapter.add_choice(`"No"`, 32)
chapter.add_choice(`"Most definitely"`, 31)
chapters.push(chapter)
//------------------
chapter = new Chapter(24, `You eat the sandwich in front of the troll, clearly enjoying it.<br><br>The troll feels rejected and sad, and begins to cry. Turns out troll tears are quite weighty, and though you try to console him, the tears rapidly increase the flow of the river beneath the bridge.<br><br>You attempt to back away, but you're not fast enough. Water overflows and carries both you and the troll away on the current, never to be seen again.<br><br>Next time you should probably share.`)
// ending
chapters.push(chapter)
//------------------
chapter = new Chapter(25, `You choke back tears. "Yeah. Me too."<br><br>You turn and walk slowly back the way you came, forgetting why you wanted to cross the bridge in the first place.<br><br>One day...<br><br>One day.`)
// ending
chapters.push(chapter)
//------------------
chapter = new Chapter(26, `Deeply saddened you sink to your knees and cry "WHY GOD WHYYYYY"<br><br>After drying your tears (and looking like a hot mess), you:`)
chapter.add_choice(`Destroy everything the troll ever held dear`, 4)
chapter.add_choice(`Goats properly mourned, you attack`, 3)
chapter.add_choice(`Show empathy`, 33)
chapters.push(chapter)
//------------------
chapter = new Chapter(27, `"Yaaaaaaaaaas. Pygmy's the best," you reply. "You have luxurious taste my friend." You high five the troll. "We can count the goats as a toll, right?" you ask, pushing your luck.<br><br>"Whatever floats your goat!" says the troll happily.`)
chapter.add_choice(`Remembering you have a sandwich, you split it with the troll.`, 34)
chapter.add_choice(`Cross the bridge, pushing the troll off as you pass`, 17)
chapter.add_choice(`Feeling generous, you pay anyway`, 7)
chapters.push(chapter)
//------------------
chapter = new Chapter(28, `After his final panicked kicks, you hear shouts of "NOOOOO" as his wife and two kids run out of the forest on the other side of the bridge. Distraught they mourn their father.<br><br>You have only one choice now. Taking responsibility for your actions, you decide to earn the income this family has lost, and take the troll's place on the bridge.<br><br>You become the most feared of all trolls...`)
chapter.add_choice(`...the most infamous of trolls...`, 5)
chapters.push(chapter)
//------------------
chapter = new Chapter(29, `The troll is sputtering as you pull him out of the water, eyes bulging."You...saved me!!" he manages to get out.<br><br>You brush off your shoulders casually. "Well I wouldn't call myself a hero, but..."<br><br>"You also tried to kill me!" he shouts, standing up. "What is wrong with you??"<br><br>You reply:`)
chapter.add_choice(`"I wanted the advantage in our fight! On guard!"`, 3)
chapter.add_choice(`"Sorry, I'm kind of a psycho. I'll pay you for the trouble if you let me pass."`, 38)
chapter.add_choice(`"I just really didn't want to share my sandwich."`, 39)
chapters.push(chapter)
//------------------
chapter = new Chapter(30, `Hoping to save the troll without getting your feet wet, you throw him the rubber duck you keep in your bag.<br><br>Unbeknownst to you, however, the rubber duck is actually the troll's one true weakness (well, that and coffee cake. And drowning. Oh! and maybe sharks. Everyone's afraid of sharks).<br><br>The rubber duck glows, a bolt of lightning out of the clear sky strikes the rubber duck and kills the troll. He sinks to the bottom of the river.`)
chapter.add_choice(`Family values`, 12)
chapters.push(chapter)
//------------------
chapter = new Chapter(31, `"Yeah. Humans have loads of these things," you reply.<br><br>"Woah...you know what. Let's go into business together. Forget the toll. We'll be rich together! Let's set up shop in Troll Village, sell all the sandwiches together."<br><br>You do that. You become rich and all of your problems are solved forever.`)
// ending
chapters.push(chapter)
//------------------
chapter = new Chapter(32, `"I can't. That was the last sandwich in all the world. And you ate it."<br><br>Turning away from you, the troll cries out in misery.<br><br>"Such a treasure right in front of me, and I devoured it. I don't even deserve to guard this bridge. You can have it."<br><br>The troll walks off, leaving you alone on the bridge. With no more sandwiches, you have nothing left either. You become...`)
chapter.add_choice(`...the most infamous of trolls...`, 5)
chapters.push(chapter)
//------------------
chapter = new Chapter(33, `"Well, you must have been awfully hungry..."<br><br>Thinking about it, you remember you have a sandwich in your backpack.`)
chapter.add_choice(`Eat the sandwich`, 24)
chapter.add_choice(`Offer the troll the sandwich`, 23)
chapter.add_choice(`Split the sandwich with the troll`, 34)
chapters.push(chapter)
//------------------
chapter = new Chapter(34, `Feeling generous, you give half of your sandwich to the troll. You both sit down on either side of the bridge and eat your respective halves.<br><br>As you eat together, you notice a twinkle in the troll's eyes you hadn't seen before. After a long discussion of politics and whether or not you want kids, you decide to get married and live happily ever after.`)
// ending
chapters.push(chapter)
//------------------
// var chapter = function (id) {
//     inquirer.prompt([
//         {
//             name: "decision",
//             type: "list",
//             message: chapters[id].text,
//             choices: chapters[id].choice_array
//         }
//     ]).then(function (res) {
//         chapter(parseInt(res.decision))
//     })
// }
// chapter(0)

module.exports = chapters