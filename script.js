let scrollToTopBtn =document.getElementById("scrollToTopBtn");

function topFunction() {
document.body.scrollTop=0;
document.documentElement.scrollTop=0; }

var x = document.getElementById('register_btn');
var x = document.getElementById('login_btn');


const registerButton =document.getElementById(`register_btn`);
const loginButton = document.getElementById(`login_btn`);
const signInForm = document.getElementById(`signin`); 
const signUpForm= document.getElementById(`signup`);


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

let postsData="";
let filterData = "";
const postContainer = document.querySelector(".post-container");
const filterContainer = document.querySelector(".filter-container");



fetch ("https://api.rss2json.com/v1/api.json?rss_url="
).then(async (response) => { 
postsData = await response.json(); 
postsData.map((post) => createPost(post)); 
filterData =[ 
new set ( 
postsData.map((post)=> post.categories)
.reduce((acc, carVal)=> acc.concat(curVal),[])
)
];
filterData.map((filter)=> createFilter(filter));
});


const createPost=(postData) => { 
const {title, link, categories} =postData; 
const post=document.createElement("div");
post.className ="post"; 
post.innerHTML = `
<a class="post-preview" href="${link}" target="_blank"> 

</a>
<div class="post-content"> 
    <p class="post-title">${title}</p>
</div>
<div class="post-tags"> 
    ${categories 
    .map((category)=> {
return `<span class="post_tag">` + category + "</span>"; 
})
.join("")}
</div>
</div> 
`;
postContainer.append(post); 
};

const createFilter = (filter) => {
  const filterButton = document.createElement("filter-button");
  filterButton.className = "filter-button";
  filterButton.innerText = filter;
  filterButton.setAttribute('data-state', 'inactive');
  filterButton.addEventListener("click", (e) =>
    handleButtonClick(e, filter)
  );
  filterContainer.append(filterButton); 
};
const resetFilterButtons = (currentButton) => {
  const filterButtons = document.querySelectorAll('.filter-button');
  [...filterButtons].map(button => {
    if (button != currentButton) {
      button.classList.remove('is-active');
      button.setAttribute('data-state', 'inactive')
    }
  })
}

const handleButtonClick = (e, param) => {
  const button = e.target;
  const buttonState = button.getAttribute('data-state');
  resetFilterButtons(button);
  
  if (buttonState =='inactive') {
    button.classList.add('is-active');
    button.setAttribute('data-state', 'active');
    handleFilterPosts(param)
  } else {
    button.classList.remove('is-active');
    button.setAttribute('data-state', 'inactive')
    resetPosts()
  }
}

const handleFilterPosts = (param) => {
  let filteredPosts = [...postsData].filter(post => post.categories.includes(param))
  
  postsContainer.innerHTML = "";
  filteredPosts.map(post => createPost(post))
};

const resetPosts = () => {
  postsContainer.innerHTML = "";
  postsData.map((post) => createPost(post));
} 