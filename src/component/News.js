import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles= [
    {
      "source": {
        "id": "nbc-news",
        "name": "NBC News"
      },
      "author": "Austin Mullen, David K. Li",
      "title": "Paul Reubens, actor best known as Pee-wee Herman, dies at 70 - NBC News",
      "description": "Actor Paul Reubens, who came to fame in the 1980s as children's TV star Pee-wee Herman, has died years after a cancer diagnosis, his team said Monday.",
      "url": "https://www.nbcnews.com/news/us-news/paul-reubens-actor-best-known-pee-wee-herman-dies-70-rcna97343",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-07/230731-one-time-use-Paul-Reubens-Pee-Wee-Herman-ew-145p-558f98.jpg",
      "publishedAt": "2023-07-31T18:04:49Z",
      "content": "Actor Paul Reubens, who came to fame in the 1980s as children's TV star Pee-wee Herman, has died years after a cancer diagnosis, his team said Monday.\r\nHe was 70.\r\n\"Last night we said farewell to Pau… [+3189 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "Bill Chappell",
      "title": "Live stream: Lori Vallow Daybell to be sentenced in 'zombie' murders - NPR",
      "description": "The sentencing hearing is being live-streamed from the Fremont County courthouse in Idaho. Vallow Daybell, 50, faces a punishment ranging up to life in prison without parole.",
      "url": "https://www.npr.org/2023/07/31/1191058640/vallow-lori-daybell-sentence-murder-doomsday",
      "urlToImage": "https://media.npr.org/assets/img/2023/07/31/ap23132717168952_wide-f70e1c4121b84024a630c093111648ec8ffecc4e-s1400-c100.jpg",
      "publishedAt": "2023-07-31T17:59:00Z",
      "content": "Lori Vallow Daybell faces up to life in prison without parole in Monday's sentencing hearing. She is seen here moments before the jury's guilty verdict was read at the Ada County Courthouse in Boise,… [+6828 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MLB.com"
      },
      "author": "Anthony Castrovince",
      "title": "MLB Trade Deadline predictions - MLB.com",
      "description": "Every Trade Deadline prediction you are about to read is accurate.*\nHow do I know? Because I’m the guy who told you, one month ago, that the Angels would acquire Lucas Giolito. And my track record of baseball predictions -- an incredible 0.000062% success rat…",
      "url": "https://www.mlb.com/news/mlb-trade-deadline-predictions-2023",
      "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/gz4em6gksds6miwxq7fl.jpg",
      "publishedAt": "2023-07-31T17:51:36Z",
      "content": "Every Trade Deadline prediction you are about to read is accurate.*\r\nHow do I know? Because Im the guy who told you, one month ago, that the Angels would acquire Lucas Giolito. And my track record of… [+6861 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Dan Patrick Reacts To Jonathan Taylor's Trade Request | 07/31/23 - Dan Patrick Show",
      "description": "Dan Patrick reacts to Indianapolis Colts running back Jonathan Taylor's trade request as well as to Colts owner Jim Irsay's recent comments about Taylor requ...",
      "url": "https://www.youtube.com/watch?v=Evfo0VBFgew",
      "urlToImage": "https://i.ytimg.com/vi/Evfo0VBFgew/maxresdefault.jpg",
      "publishedAt": "2023-07-31T17:32:21Z",
      "content": null
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Kim Willis",
      "title": "Cardi B fan reports battery after rapper threw microphone at her in Vegas - USA TODAY",
      "description": "Cardi B fought back when a rude fan decided to fling a drink at her onstage in Las Vegas: The rapper furiously threw her microphone at her attacker.",
      "url": "https://www.usatoday.com/story/entertainment/celebrities/2023/07/30/cardi-b-throws-microphone-after-fan-throws-drink-onstage/70494723007/",
      "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/04/USAT/ec5094a8-b8c7-4475-89e6-98b8e6856bc3-GTY_1510955017.jpg?crop=2999,1687,x0,y152&width=2999&height=1687&format=pjpg&auto=webp",
      "publishedAt": "2023-07-31T17:26:15Z",
      "content": "Cardi B fought back when a rude fan decided to fling a drink at her onstage: The \"WAP\" rapper furiously threw her microphone at her attacker.\r\nIn a now-viral video shared Saturday on social media, Ca… [+2491 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Ben Brasch",
      "title": "The Mega Millions lottery jackpot is over $1 billion again - The Washington Post",
      "description": "The Mega Millions lottery jackpot has crested $1 billion, the lotto agency says, in an increasingly common phenomenon.",
      "url": "https://www.washingtonpost.com/nation/2023/07/31/billion-mega-millions-jackpot-lottery/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CJ4JOOTE3IWSX4RJAFY63I6OOE_size-normalized.jpg&w=1440",
      "publishedAt": "2023-07-31T17:16:23Z",
      "content": "Comment on this story\r\nComment\r\nMore than six months after a Mega Millions jackpot crested the $1 billion mark, the potential haul has again reached 10 digits.\r\nThe jackpot was $1.05 billion Monday m… [+2845 chars]"
    },
    {
      "source": {
        "id": "nbc-news",
        "name": "NBC News"
      },
      "author": "Julianne McShane, TJ Swigart",
      "title": "Body camera footage shows Texas family held at gunpoint after police typo IDs car as stolen - NBC News",
      "description": "Texas police held a Black family at gunpoint last week after a typo lead police to wrongly believe their car was stolen.",
      "url": "https://www.nbcnews.com/news/us-news/firsco-texas-family-held-gunpoint-after-police-typo-stolen-car-rcna97246",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-07/230731-texas-family-gunpoint-mn-0820-08cbe4.jpg",
      "publishedAt": "2023-07-31T17:14:34Z",
      "content": "Texas police held a Black family at gunpoint earlier this month after a typo lead police to wrongly believe their car was stolen. During the incident, an officer admitted to identifying the family's … [+7608 chars]"
    },
    {
      "source": {
        "id": "financial-times",
        "name": "Financial Times"
      },
      "author": "Cristina Criddle",
      "title": "Elon Musk's X Corp threatens to sue anti-hate speech group over Twitter claims - Financial Times",
      "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
      "url": "https://www.ft.com/content/96a06e9a-5fc8-4a28-ae10-5aed0138bfa2",
      "urlToImage": null,
      "publishedAt": "2023-07-31T17:13:17Z",
      "content": "What is included in my trial?\r\nDuring your trial you will have complete digital access to FT.com with everything in both of our Standard Digital and Premium Digital packages.\r\nStandard Digital includ… [+1494 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Live Science"
      },
      "author": "Jennifer Nalewicki",
      "title": "See stunning likeness of Zlatý kůň, the oldest modern human to be genetically sequenced - Livescience.com",
      "description": "Researchers created a facial approximation of a 45,000-year-old individual who is believed to be the oldest anatomically modern human ever to be genetically sequenced.",
      "url": "https://www.livescience.com/archaeology/see-stunning-likeness-of-zlaty-kun-the-oldest-modern-human-to-be-genetically-sequenced",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/VtmsLSEySoPBEraT8tL3t5-1200-80.jpg",
      "publishedAt": "2023-07-31T16:57:07Z",
      "content": "In 1950, archaeologists discovered a severed skull buried deep inside a cave system in Czechia (the Czech Republic). Because the skull was split in half, researchers concluded that the skeletal remai… [+3996 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "DeSantis unveils economic plan, aim to ease process for discharging student loans through bankruptcy - POLITICO",
      "description": "It is currently possible to get student loans discharged through bankruptcy, according to the Department of Education's website, but the process has proven to be difficult.",
      "url": "https://www.politico.com/news/2023/07/31/desantis-2024-education-00108961",
      "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1155968404/469b924e-abd2-43e3-9bd0-feff95c6e93a/ae99d0a5-f8e4-4f3c-8713-75fe8f9a021d/1280x720/match/image.jpg",
      "publishedAt": "2023-07-31T16:54:54Z",
      "content": "It is currently possible to get student loans discharged through bankruptcy, according to the Department of Educations website, but the process has proven to be difficult. Under current department gu… [+2461 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "Dustin Jones",
      "title": "Two supermoon events, including a sturgeon supermoon, are happening in August - NPR",
      "description": "Two stellar lunar events are happening this August, with a sturgeon supermoon happening on Aug. 1, and then a rare blue supermoon on Aug. 30.",
      "url": "https://www.npr.org/2023/07/31/1191072404/supermoon-sturgeon-blue-august-rare-lunar-event",
      "urlToImage": "https://media.npr.org/assets/img/2023/07/31/ap23185195625465_wide-a191c3fbbd660bfba5bdfdddd9b5d58a06b436a3-s1400-c100.jpg",
      "publishedAt": "2023-07-31T16:40:23Z",
      "content": "A supermoon seen on July 3, in Kansas City, Mo. The next two supermoons of 2023 will take place at the beginning and end of August.\r\nCharlie Riedel/AP\r\nThe moon will seem extra big and bright and thu… [+3218 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "George Dvorsky",
      "title": "The Best Spaceflight Images From July Will Make Your Head Explode - Gizmodo",
      "description": "Explore July's top space-themed images, showcasing a historic final launch, Barbies in space, and exploding rocket engines, among many more.",
      "url": "https://gizmodo.com/the-best-spaceflight-images-from-july-1850609720",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2b9930a4a5b591e1ad97ddc75040912f.jpg",
      "publishedAt": "2023-07-31T16:25:00Z",
      "content": "After 27 years of dutiful service, Arianespaces Ariane 5 rocket flew for the last time, departing Europes Spaceport in Kourou, French Guiana, on July 5. The legendary rocket took part in some histori… [+271 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Chris Isidore",
      "title": "99-year-old trucking company Yellow shuts down, putting 30,000 out of work - CNN",
      "description": "Yellow Corp., a 99-year-old trucking company that was once a dominant player in its field, halted operations Sunday and will lay off all 30,000 of its workers.",
      "url": "https://www.cnn.com/2023/07/31/business/yellow-corp-closing/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230730180409-01-yellow-trucking-062823.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-31T16:23:00Z",
      "content": "Yellow Corp., a 99-year-old trucking company that was once a dominant player in its field, halted operations Sunday and will lay off all 30,000 of its workers.\r\nThe unionized company has been in a ba… [+6675 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Pro-Donald Trump group spends more than $40m on legal fees - BBC",
      "description": "Legal bills now far exceed Save America PAC's other expenses - and they are set to keep growing.",
      "url": "https://www.bbc.com/news/world-us-canada-66362100",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13807/production/_130597897_gettyimages-1258668806.jpg",
      "publishedAt": "2023-07-31T16:18:36Z",
      "content": "The primary fundraising and political spending group supporting Donald Trump has spent more than $40m (£31m) on legal fees so far this year.\r\nThat money, due to be confirmed in a financial filing on … [+5302 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Mail"
      },
      "author": "Cassidy Morrison Senior",
      "title": "Nondescript California warehouse turns out to be an illicit virus lab - Daily Mail",
      "description": "A central California city is reeling after a nondescript warehouse turned out to be an illicit lab replete with stored biohazards including coronavirus, HIV, and malaria.",
      "url": "https://www.dailymail.co.uk/health/article-12357073/Unassuming-warehouse-California-turns-illegal-Chinese-run-virus-laboratory-genetically-engineering-mice-experimenting-HIV-herpes-malaria.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/07/31/17/73806909-0-image-m-26_1690819279664.jpg",
      "publishedAt": "2023-07-31T16:04:01Z",
      "content": "A central California city is reeling after a nondescript warehouse turned out to be an illicit lab replete with stored biohazards, including coronavirus, HIV, and malaria.\r\nIf it were not for an erra… [+5302 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Hyung-Jin Kim, USA TODAY",
      "title": "South Korean dog meat farmers push back against growing moves to outlaw their industry - USA TODAY",
      "description": "Dog meat consumption, a centuries-old practice on the Korean Peninsula, isn't explicitly prohibited or legalized in South Korea.",
      "url": "https://www.usatoday.com/story/news/world/2023/07/31/south-korean-dog-meat-farmers-country-changing-taste/70497923007/",
      "urlToImage": "https://www.gannett-cdn.com/authoring/authoring-images/2023/07/31/USAT/70498082007-sog-2.jpg?auto=webp&crop=6353,3590,x0,y642&format=pjpg&width=1200",
      "publishedAt": "2023-07-31T16:02:39Z",
      "content": "PYEONGTAEK, South Korea The dogs bark and stare as Kim Jong-kil approaches the rusty cages housing the large, short-haired animals he sells for their meat. Kim opens a door and pets one dogs neck and… [+6911 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Police"
      },
      "author": "Cale Hunt",
      "title": "Samsung Galaxy Tab S9+ vs. iPad Air: Looking beyond the huge price difference - Android Police",
      "description": "The new Tab S9+ goes up against Apple's compact iPad air to see which is a better choice for you",
      "url": "https://www.androidpolice.com/samsung-galaxy-tab-s9-plus-vs-ipad-air/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/07/galaxy-tab-s9-plus-beige-render-square.jpg",
      "publishedAt": "2023-07-31T16:00:00Z",
      "content": "<ul><li> Samsung Galaxy Tab S9+ \r\nA larger, more durable tablet\r\nSamsung's Galaxy Tab S9+ brings a gorgeous 12.4-inch AMOLED display, IP68 water and dust resistance, better storage options, more memo… [+14452 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Gabe Hauari, Isabelle Butera",
      "title": "Georgia resident dies from rare brain-eating amoeba, Naegleria fowleri - USA TODAY",
      "description": "A Georgia resident has died after contracting Naegleria fowleri, otherwise known as a \"brain-eating amoeba.\"",
      "url": "https://www.usatoday.com/story/news/nation/2023/07/31/brain-eating-amoeba-georgia-resident-dead/70496622007/",
      "urlToImage": "https://www.usatoday.com/gcdn/-mm-/46db0544f49dec473e289068325f89c23695d572/c=0-32-700-427/local/-/media/2017/06/23/USATODAY/USATODAY/636338116600505148-XXX-climate-change-disease04.jpg?width=700&height=395&fit=crop&format=pjpg&auto=webp",
      "publishedAt": "2023-07-31T15:58:38Z",
      "content": "A Georgia resident has died of Naegleria fowleri after likely becoming infected while swimming in a freshwater lake or pond, according to the Georgia Department of Public Health.\r\nNaegleria fowleri i… [+3242 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Olga Voitovych, Vasco Cotovio",
      "title": "Moscow attacks Zelensky’s hometown after he said war had returned to Russia - CNN",
      "description": "A day after Volodymyr Zelensky said war was “returning to Russia” with an attempted drone strike on Moscow, the Kremlin launched a deadly airstrike against the Ukraine president’s hometown of Kryvyi Rih.",
      "url": "https://www.cnn.com/2023/07/31/europe/kryvyi-rih-strikes-ukraine-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230731092002-01-kryvyi-rih-missile-strike-0731.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-07-31T15:43:00Z",
      "content": "A day after Volodymyr Zelensky said war was returning to Russia with an attempted drone strike on Moscow, the Kremlin launched a deadly airstrike against the Ukraine presidents hometown of Kryvyi Rih… [+2769 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Pakistan holds funerals as death toll from rally bombing rises to 54 - Al Jazeera English",
      "description": "Funerals held for the victims of Sunday’s suicide attack, which also wounded nearly 200 people.",
      "url": "https://www.aljazeera.com/news/2023/7/31/pakistan-holds-funerals-as-government-vows-to-hound-those-responsible",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/07/33QA9KP-highres-1690792575.jpg?resize=1920%2C1440",
      "publishedAt": "2023-07-31T15:33:45Z",
      "content": "The death toll from a suicide bombing that targeted an election rally in the border district of Bajaur, Pakistan, has risen to 54 as funerals are held and the government promises to hunt down those b… [+5612 chars]"
    }
  ];
  constructor(){
    super();
    this.state ={

    
    articles : this.articles,
    loading:false,
    }
  }

  render() {
    return (
        <>
      <h1 className="d-flex justify-content-center">Today News</h1>
      <div className="container my-3">
                <div className="row">
                    
                    {this.state.articles.map((element) => {  
                   return(
                    <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem type="cricket" desc={element.description.slice(0,130)} img={element.urlToImage}  tittle={element.title.slice(0,42)} buttonurl={element.url}/>
                    </div>

                   )
                  
                   
                  
                    })};
                      </div>
                   
                
        </div>
      </>
    )
  }
}

export default News