/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let dotaNFT = []


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eyeColor, bodyType) {
    dotaNFT.push({name, eyeColor, bodyType})
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    for (let i = 0; i < dotaNFT.length; i++) {
        console.log(`NFT Name is ${dotaNFT[i].name}, Eye Color of this NFT is ${dotaNFT[i].eyeColor} and the Body Type ${dotaNFT[i].bodyType}`)
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total minted NFT is ${dotaNFT.length}`)
}

// call your functions below this line

mintNFT("sven", "blue", "large")
mintNFT("chaos knight", "red", "large")
mintNFT("hoodwink", "brown", "small")
mintNFT("tuskar", "white", "medium")
listNFTs()
getTotalSupply()

