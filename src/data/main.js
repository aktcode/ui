//Only use basic html tags, as some of the contents are set using dangerouslySetInnerHTML
const Data = {
    "forms" : new Map([
        [ 1 , "<i>How simple a form can get?</i>" ],
        [ 2 , "<i>Dark theme<br>Just like me :)</i>" ],
        [ 3 , "Some white on white" ]
    ]),
    "others" : new Map([
        ["Card", "Minimalistic card with initial and looping animations"],
        ["Phone", "A phone, I guess?"]
    ]),
    "search" : new Map([
        [ 1 , "A simple and plain search"]
    ]),
    //Whether to show search icon by deafault, setting false will show the icon when use clicks on input
    "defaultSearchIcon" : new Map([
        [ 1 , true],
        [ 2 , false]
    ]),
    "dummy" : new Map([
        [ "name" , "Abhishek Kumar Tiwari" ],
        [ "cardNumber" , "3141 5926 5358 9793" ],
        [ "cardExpiry" , "12/26" ]
    ])
}



export default Data;