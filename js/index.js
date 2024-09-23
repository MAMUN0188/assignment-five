
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
        
        const div=document.createElement('div')

        const h1=document.createElement('h1')
        h1.innerText=`${totalCampaignAmount} Taka is Donated for famine-2024 at Feni, Bangladesh`
        const p=document.createElement('p')
        p.innerText=`Date:${new Date().toLocaleDateString()} (Bangladesh Standard Time)`
        div.appendChild(h1)
        div.appendChild(p)
        document.getElementById('history-section').appendChild(div)
        h1.className="font-bold pb-2"
        div.className="border px-8 py-6 mb-3 lg:w-[1200px] lg:mx-auto mx-5 rounded-xl mt-2"
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

        const div = document.createElement('div')
        const h1=document.createElement('h1')
        const p=document.createElement('p')
        p.innerText=`Date: ${new Date().toLocaleDateString()} (Bangladesh Standard Time)`
        h1.innerText=`${totalFeniCampaignAmount} Taka is Donated for Flood Relief in Feni,Bangladesh`
        div.appendChild(h1)
        div.appendChild(p)
        document.getElementById('history-section').appendChild(div)
        h1.className="font-bold pb-2"
        div.className="border px-8 py-6 mb-3 lg:w-[1200px] lg:mx-auto mx-5 rounded-xl mt-2"
        
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

        const div = document.createElement('div')
        const h1=document.createElement('h1')
        const p=document.createElement('p')
        p.innerText=`Date: ${new Date().toLocaleDateString()} (Bangladesh Standard Time)`
        h1.innerText=`${totalQuotaCampaignAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`
        div.appendChild(h1)
        div.appendChild(p)
        document.getElementById('history-section').appendChild(div)
        h1.className="font-bold pb-2"
        div.className="border px-8 py-6 mb-3 lg:w-[1200px] lg:mx-auto mx-5 rounded-xl mt-2"
    }
    else{
        alert('Its Not A Number, Please provide a number')
    }
})
