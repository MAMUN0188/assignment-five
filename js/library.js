function showDonateAmount(id){
    const seeResult=document.getElementById(id).value
    const seeResultNumber=parseFloat(seeResult)
    return seeResultNumber
}
function showDonateAmounttext(id){
    const seeResult=document.getElementById(id).innerText
    const seeResultText=parseFloat(seeResult)
    return seeResultText
}
// function showHiddenSection(id){
//     document.getElementById('campaign-section').classList.add('hidden')
//     document.getElementById('history-section').classList.add('hidden')

//     document.getElementById(id).classList.remove('hidden')
// }