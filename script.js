let scrollToTopBtn =document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
document.body.scrollTop=0;
document.documentElement.scrollTop=0; }

const feedContainer = document.getElementById('feedContainer');
const rssFeeds = [
     "https://www.us-cert.gov/ncas/alerts.xml",
            "https://www.bleepingcomputer.com/feed/",
            "https://threatpost.com/feed/",
            "https://www.darkreading.com/rss.xml",
            "https://www.sans.org/webcasts/rss",
            "https://krebsonsecurity.com/feed/",
            "https://cyware.com/rss-feed/",
            "https://www.securityweek.com/rss",
            "https://feeds.feedburner.com/TheHackersNews",
            "https://www.schneier.com/blog/atom.xml",
            "https://isc.sans.edu/rssfeed.xml",
            "https://www.fireeye.com/blog/threat-research/_jcr_content.feed",
            "https://blogs.cisco.com/security/feed",
            "https://www.mcafee.com/blogs/feed/",
            "https://nakedsecurity.sophos.com/feed/",
            "https://www.tripwire.com/state-of-security/feed/",
            "https://research.checkpoint.com/feed/",
            "https://www.infosecurity-magazine.com/rss/news/",
            "https://cybersecurity.att.com/site/blog-all-rss",
            "https://www.cybereason.com/blog/rss.xml",
            "https://blog.qualys.com/feed/",
            "https://www.tenable.com/blog/feed",
            "https://www.blackhillsinfosec.com/feed/",
            "https://rss.packetstormsecurity.com/files/",
            "https://unit42.paloaltonetworks.com/feed/",
            "https://www.arbornetworks.com/blog/asert/feed/",
            "https://www.trendmicro.com/rss/index.xml",
            "https://www.crowdstrike.com/blog/feed/",
            "https://securityaffairs.co/wordpress/feed"
            
];
const proxyUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
async function fetchFeeds() {
    feedContainer.innerHTML=''; // clearing contaier before loading new 
    for (let feedUrl of rssFeeds) {
        try { 
        const response = await fetch(proxyUrl + encodeURIComponent(feedUrl));
        const data = await response.json();
        // Display feed items
if (data.items) { 
     data.items.slice(0, 1).forEach(feed => { // Limit to the 1 latest items per feed
                            const feedItem = document.createElement('div');
                            feedItem.className = 'feed-item';

                            const title = document.createElement('h2');
                            title.textContent = feed.title;

                          const link = document.createElement('a');
                            link.href = feed.link;
                            link.textContent = 'Read more';
                            link.target = '_blank';

                           feedItem.appendChild(title);
                           feedItem.appendChild(link);
                           feedContainer.appendChild(feedItem);
                        });
                    }
                } catch (error) {
                    console.error('Error fetching feed:', error);
                }
            }
}

fetchFeeds();
//loading the feeds on page load
setInterval(fetchFeeds,600000);

