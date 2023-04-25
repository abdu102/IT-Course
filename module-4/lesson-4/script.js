// function sumNoDuplicates(numList) {
//     let duplicate = numList.filter((item, index) => {
//         if( numList.indexOf(item) == index ) {
//             return item;
//         }
//     });
//     console.log(duplicate);
// }
// sumNoDuplicates([1, 2, 2, 3, 3, 4]);

// function cardGame(card1, card2, trump) {
//     for ( let i = 2; i <= 10; i++) {
//         if( card1.includes(`${i}♣`) && card2.includes('♣') && trump == '♦' ) {
//             return 'The second card won.';
//         } else if( card1.includes(`${i}♥`) && card2.includes('♣') && trump == '♦' ) {
//             return 'Let us play again.'
//         } else if ( card1.includes(`${i}♥`) && card2.includes('♠') && trump == '♣' ) {
//             return 'Someone cheats.'
//         } else if( card1.includes(`${i}♦`) && card2.includes('♠') && trump == '♦' ) {
//             return 'The first card won.'
//         } else if ( card1 == 'joker' && card2 == 'joker' ) {
//             return 'Someone cheats.'
//         } else {
//             return 'The second card won.'
//         }
//     }
//   }

function missingWord(nums, str) {
  let word = str.split().replace(' ', '');
  console.log(word.length);
  let num = nums.sort((a, b) => a - b);
     num.forEach( el => {
       
     }
 )
}
missingWord([5, 0, 3], "I love you");