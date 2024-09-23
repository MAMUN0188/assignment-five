
document.getElementById('noakhali-btn').addEventListener('click', function(){
    const donationInputField=showDonateAmount('donation-input-field')
    if(donationInputField>0 && isNaN(Number)){
        const mainBalance=showDonateAmounttext('main-balance')
        const noakhaliCampaignAmount=showDonateAmounttext('noakhali-campaign-amount')
        const totalCampaignAmount=donationInputField+noakhaliCampaignAmount
        const totalMainBalance=mainBalance-donationInputField
        document.getElementById('noakhali-campaign-amount').innerText=totalCampaignAmount
        document.getElementById('main-balance').innerText=totalMainBalance
        console.log(totalCampaignAmount, totalMainBalance)
    }
    else{
        alert('Its Not A Number, Please provide a number')
    }
})
document.getElementById('feni-btn').addEventListener('click', function(){
    const feniInputField=showDonateAmount('feni-input-field')

    if(feniInputField>0 && isNaN(Number)){
        const mainBalance=showDonateAmounttext('main-balance')
        const feniCampaignAmount=showDonateAmounttext('feni-campaign-amount')
        const totalFeniCampaignAmount=feniCampaignAmount+feniInputField
        const totalFeniMainBalance=mainBalance-feniInputField
        document.getElementById('feni-campaign-amount').innerText=totalFeniCampaignAmount
        document.getElementById('main-balance').innerText=totalFeniMainBalance
        console.log(totalFeniCampaignAmount, totalFeniMainBalance)
    }
    else{
        alert('Its Not A Number, Please provide a number')
    }
})
document.getElementById('quota-btn').addEventListener('click', function(){
    const quotaInputField=showDonateAmount('quota-input-field')
    if(quotaInputField>0 && isNaN(Number)){
        const quotaCampaignAmount=showDonateAmounttext('quota-campaign-amount')
        const mainBalance=showDonateAmounttext('main-balance')
        const totalQuotaCampaignAmount=quotaCampaignAmount+quotaInputField
        const totalQuotaMainBalance=mainBalance-quotaInputField
        document.getElementById('quota-campaign-amount').innerText=totalQuotaCampaignAmount
        document.getElementById('main-balance').innerText=totalQuotaMainBalance
        console.log(totalQuotaCampaignAmount, totalQuotaMainBalance)
    }
    else{
        alert('Its Not A Number, Please provide a number')
    }
})
