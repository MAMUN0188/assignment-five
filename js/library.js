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
function showButtonValue(id){
    document.getElementById('campaign-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}
// function buttonColorSwap(id){
//     document.getElementById('donation-btn').classList.add('bg-[#B4F461]', 'hover:bg-[#B4F461]')
//     document.getElementById('history-btn').classList.add('bg-[#B4F461]', 'hover:bg-[#B4F461]')
//     document.getElementById(id).classList.remove('bg-[#B4F461]', 'hover:bg-[#B4F461]')
// }