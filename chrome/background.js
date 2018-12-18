// create a context menu
/*
 * IPs
 */
chrome.contextMenus.create({
    "id": "IP",
    "title": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Alien IP",
    "title": "AlienVault OTX",
    "parentId": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Censys IP",
    "title": "Censys",
    "parentId": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "GreyNoise IP",
    "title": "GreyNoise",
    "parentId": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "IPVoid IP",
    "title": "IPVoid",
    "parentId": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Onyphe IP",
    "title": "Onyphe",
    "parentId": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Shodan IP",
    "title": "Shodan",
    "parentId": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Talos IP",
    "title": "Talos",
    "parentId": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "ThreatCrowd IP",
    "title": "ThreatCrowd",
    "parentId": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "VT IP",
    "title": "VirusTotal",
    "parentId": "IP",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "X-Force IP",
    "title": "X-Force",
    "parentId": "IP",
    "contexts": ["selection"]
});

/*
 * Domains
 */
chrome.contextMenus.create({
    "id": "Domain",
    "title": "Domain",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Alexa Domain",
    "title": "Alexa",
    "parentId": "Domain",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Censys Domain",
    "title": "Censys",
    "parentId": "Domain",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Onyphe Domain",
    "title": "Onyphe",
    "parentId": "Domain",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Shodan Domain",
    "title": "Shodan",
    "parentId": "Domain",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Talos Domain",
    "title": "Talos",
    "parentId": "Domain",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "ThreatCrowd Domain",
    "title": "ThreatCrowd",
    "parentId": "Domain",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "VT Domain",
    "title": "VirusTotal",
    "parentId": "Domain",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "X-Force Domain",
    "title": "X-Force",
    "parentId": "Domain",
    "contexts": ["selection"]
});

/*
 * Hashes
 */
chrome.contextMenus.create({
    "id": "Hash",
    "title": "Hash",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Alien Hash",
    "title": "AlienVault OTX",
    "parentId": "Hash",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Hybrid Hash",
    "title": "Hybrid Analysis",
    "parentId": "Hash",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Talos Hash",
    "title": "Talos",
    "parentId": "Hash",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "VT Hash",
    "title": "VirusTotal",
    "parentId": "Hash",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "X-Force Hash",
    "title": "X-Force",
    "parentId": "Hash",
    "contexts": ["selection"]
});

/*
 * URLs
 */
chrome.contextMenus.create({
    "id": "URL",
    "title": "URL",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "Any.Run",
    "title": "Any.Run",
    "parentId": "URL",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "BlueCoat URL",
    "title": "BlueCoat",
    "parentId": "URL",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "urlscan",
    "title": "urlscan",
    "parentId": "URL",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "VT URL",
    "title": "VirusTotal",
    "parentId": "URL",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "X-Force URL",
    "title": "X-Force",
    "parentId": "URL",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "zscaler",
    "title": "Zscaler",
    "parentId": "URL",
    "contexts": ["selection"]
});

// create empty url variable
var url = ""

// fuction to copy selected text to clipboard
function copyTextToClipboard(text) {
    //Create a textbox field where we can insert text to.
    //var copyFrom = document.createElement("textarea");

    //Set the text content to be the text you wished to copy.
    copyFrom.textContent = text;

    //Append the textbox field into the body as a child.
    //"execCommand()" only works when there exists selected text, and the text is inside
    //document.body (meaning the text is part of a valid rendered HTML element).
    document.body.appendChild(copyFrom);

    //Select all the text!
    copyFrom.select();

    //Execute command
    document.execCommand('copy');

    //(Optional) De-select the text using blur().
    copyFrom.blur();

    //Remove the textbox field from the document.body, so no other JavaScript nor
    //other elements can get access to this.
    document.body.removeChild(copyFrom);
}

/*
 * Source:
 * https://stackoverflow.com/questions/13899299/write-text-to-clipboard#18258178
 */
function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
    }

/*
 * The click event listener: 
 * where we perform the approprate action 
 * given the ID of the menu item that was clicked
 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
    // copy the selection to clipboard
    copyStringToClipboard(info.selectionText);

    switch (info.menuItemId) {
            /*
             * IPs
             */
            case "Alien IP":
                url = "https://otx.alienvault.com/indicator/ip/"+info.selectionText;
                break;
            case "Censys IP":
                url = "https://censys.io/ipv4/"+info.selectionText;
                break;
            case "GreyNoise IP":
                url = "https://viz.greynoise.io/ip/"+info.selectionText;
                break;
            case "IPVoid IP":
                url = "http://www.ipvoid.com/";
                break;
            case "Onyphe IP":
                url = "https://www.onyphe.io/search/?query="+info.selectionText;
                break;
            case "Shodan IP":
                url = "https://www.shodan.io/host/"+info.selectionText;
                break;
            case "Talos IP":
                url = "https://talosintelligence.com/reputation_center/lookup?search="+info.selectionText;
                break;
            case "ThreatCrowd IP":
                url = "https://www.threatcrowd.org/pivot.php?data="+info.selectionText;
                break;
            case "VT IP":
                url = "https://www.virustotal.com/#/ip-address/"+info.selectionText;
                break;
            case "X-Force IP":
                url = "https://exchange.xforce.ibmcloud.com/ip/"+info.selectionText;
                break;
            /*
             * Domains
             */
            case "Alexa Domain":
                url = "https://www.alexa.com/siteinfo/"+info.selectionText;
                break;
            case "Censys Domain":
                url = "https://censys.io/domain?q="+info.selectionText;
                break;
            case "Onyphe Domain":
                url = "https://www.onyphe.io/search/?query="+info.selectionText;
                break;
            case "Shodan Domain":
                url = "https://www.shodan.io/search?query="+info.selectionText;
                break;
            case "Talos Domain":
                url = "https://talosintelligence.com/reputation_center/lookup?search="+info.selectionText;
                break;
            case "ThreatCrowd Domain":
                url = "https://www.threatcrowd.org/pivot.php?data="+info.selectionText;
                break;
            case "VT Domain":
                url = "https://virustotal.com/#/domain/"+info.selectionText;
                break;
            case "X-Force Domain":
                url = "https://exchange.xforce.ibmcloud.com/url/"+info.selectionText
                break;
            /*
             * Hashes
             */
            case "Alien Hash":
                url = "https://otx.alienvault.com/indicator/file/"+info.selectionText;
                break;
            case "Hybrid Hash":
                url = "https://www.hybrid-analysis.com/search?query="+info.selectionText;
                break;
            case "Talos Hash":
                url = "https://talosintelligence.com/talos_file_reputation"
                break;
            case "VT Hash":
                url = "https://www.virustotal.com/#/file/"+info.selectionText;
                break;
            case "X-Force Hash":
                url = "https://exchange.xforce.ibmcloud.com/malware/"+info.selectionText;
                break;
            /*
             * URLs
             */
            case "Any.Run":
                url = "https://app.any.run/";
                break;
            case "BlueCoat URL":
                url = "http://sitereview.bluecoat.com/#/lookup-result/";
                break;
            case "urlscan":
                url = "https://urlscan.io/";
                break;
            case "VT URL":
                url = "https://www.virustotal.com/#/home/url";
                break;
            case "X-Force URL":
                url = "https://exchange.xforce.ibmcloud.com/url/"+info.selectionText
                break;
            case "zscaler":
                url = "https://zulu.zscaler.com/";
                break;
    }
    chrome.tabs.create({url: url});
});