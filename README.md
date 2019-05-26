# My Portfolio

[Live portfolio](https://elloo.github.io/)

[Portfolio GitHub](https://github.com/elloo/portfolio)

This portfolio is a web page designed to showcase the full-stack web development skills of Ewe Lin Loo.

## Functionality / Features

- All artwork 100% handmade by Ewe Lin Loo
- Tabbed navbar emulates the aesthetic of physical folders
  - White borders around images imitate stickers on folders
- Desktop version has a z-index stacked layout
- Mobile version adapts to a continuous, flexbox layout
  - This prevents unnecessary scrolling back up to reach the nav

### Sitemap

This portfolio is contained entirely within one web page as seen in this [this](/docs/sitemap.xml) XML sitemap.

### Screenshots

#### Desktop

![Portfolio desktop screenshot](docs/desktop.png)

#### Tablet

![Portfolio tablet screenshot](docs/tablet.png)

#### Mobile

![Portfolio tablet mobile](docs/mobile.png)

### Target Audience

This portfolio is intended for potential employers, recruiters and collaborators.

### Tech stack

This project was built with:

- HTML5
- CSS3
- JavaScript
- GitHub
- GitHub Pages

## Design Process

The first thing I did was start a Trello board that would be added to and edited throughout the design and coding processes. I then went to Pinterest to start collecting inspirational images for my mood board. I kept my coded art at the back of my mind as I knew I wanted to use them as decorations.

![Pinterest mood board top](docs/pinterest1.png)

![Pinterest mood board bottom](docs/pinterest.png)

 At the same time, I played around with the colour scheme generator at [coolors.co](coolors.co). The palette I ended up using was this one:

![Coolors pink scheme](docs/colours.png)

Once I had the mood board and colour scheme, I felt that a calligraphic script would bring character to the aesthetics of my portfolio. I relied on Google Fonts to suggest a sans serif font that I could pair it with. The calligraphic font I chose is called "Dr Sugiyama" whilst the sans serif font I chose is called "Montserrat".

![Website fonts](docs/fonts.png)

I then came up with the idea of building a navigation system that relied on the JavaScript `onclick` function and z-index. [This](https://codepen.io/nyrnzn/pen/jVyZbE) CodePen showed me that what I had in mind was doable.![Dynamically changing z-index CodePen](docs/codepen.png)

 I felt that this unique navigation would give my website design some originality.

### Wireframes

These original wireframes I came up with vary compared to the final product. 

In the "About" wireframes, the content has been reduced to a list rather than a paragraph of text. This should allow viewers to quickly scan the page and get an idea of my personality, rather than having them read through more dense text. The quote on the side has also been hidden behind the "About" section instead of showing on the side.

![About wireframes](docs/Main.png)

In the "Portfolio" wireframe, the orientation of the quote has been changed from horizontal to vertical so that it can be read normally. In addition, the navbar of the mobile version is not fixed to the top. 

![Portfolio wireframes](docs/Portfolio.png)

In the "Contact" page, the contact form in the wireframe has been removed and replaced with a text version of my email address. The location of the social media buttons has also been moved to a more central location

![Contact wireframes](docs/Contact.png)

### Usability Considerations

There were a few usability considerations to note:

1. The desktop layout and navigation would not be suitable for the tablet or mobile versions. This is because users are able to switch sections by clicking on the colour of that section. On mobile or tablet, they may accidentally tap on the coloured portion of a different section and switch  to that section. Additionally, this would make it more difficult for users to scroll down and up the page - particularly if they are right-handed.
2. I wanted to remove any vertical scrolling on the desktop version, however in order to easily make it responsive I used fractional / `fr` units. This left a slight amount of vertical scrolling.
3. The navbar is not fixed to the top of the screen. This is unnecessary as the desktop section has minimal vertical scrolling and using a mobile / tablet to scroll back up to the navigation is quick and easy.
4. The original contact form included in the wireframe has been removed from the final design. This is because the form would have relied on a `mailto` link, which would only work correctly if the user had adjusted the browser settings appropriately.
5. The social media icons on the tablet / mobile versions have been contained within the contact section rather than having them in a fixed position. This allows for more content space on smaller screens.

## Project plan & timeline

**Day 1** 

- Created Trello board to be used throughout project
- Created mood board
- Found fonts
- Tested z-index navigation idea
- Created wireframes

**Day 2**

- Initial coding of wireframes using `position: relative` and `position: absolute`
- Added initial version of content with placeholder images

**Day 3**

- Added CSS Grid to allow for uniform design

**Day 4**

- Add Flexbox and media breaks to achieve responsive design
- Replace placeholder images with true content
- Edit written content

**Day 5 - 6**

- Finished documentation
- Add favicon
- Played with adding animations
- Conducted informal usability testing with friends and over Twitter
- Adjusted website according to feedback

**Day 7**

- Final check of project
- Presentation slides

### Trello Screenshots

![Near completed Trello board](docs/trello.png)

![Trello description](docs/trello_desc.png)

## Short Answer Q&A

**Describe key events in the development of the internet from the 1980s to today (max. 150 words)**

Usenet was launched in 1980 and represents the earliest use of the internet as a public news source.

On January 1, 1983, Transmission Control Protocol and Internet Protocol (TCP/IP) was adopted. Researchers then began to assemble the "network of networks" that became the modern internet.

In 1984, the Domain Name System (DNS) was introduced. This allowed for meaningful names rather than numerical addresses of websites.

In the late 1980s, commercial Internet Service Providers (ISPs) began to emerge. 

In 1990, the internet became the World Wide Web (WWW). This linked together hypertext documents that could be accessed from any computer on the network. British computer scientist Tim Berners-Lee was behind this advancement. He also introduced the first web browser and web page.

Since the mid-1990s, the internet has profoundly impacted culture, commerce and technology. Most notable is the invention of near-instant communication (electronic mail, Voice over Internet Protocol calls, etc).

**Define and describes the relationship between fundamental aspects of the internet such as: domains, web servers, DNS, and web browsers (max. 150 words)**

A domain refers to the address that you type in when browsing the internet. For example, "github.com" or "google.com". It is simply an easy way to remember the Internet Protocol (IP) address of a website. 

The internet uses IP addresses to direct and connect traffic. Normally, an IP address consists of four numbers separated by periods. 

A web server stores, processes and delivers web pages to clients (typically a web browser). It does this by handling World Wide Web (WWW) requests for IP addresses. This communication between web server and clients is done through Hypertext Transfer Protocol (HTTP). HTTP can both serve and retrieve content (through form submission) to and from clients.

A web browser is used to initiate HTTP communication with a request for a specific resource from a web server. Each resource has a distinct Uniform Resource Locator (URL). The browser displays the resource if it is found.

**Reflect on one aspect of the development of internet technologies and how it has contributed to the world today (max. 150 words)**

The web browser is one powerful aspect of the development of internet technologies. By allowing users access to the World Wide Web, it has contributed to the world today in a myriad of ways. 

The web browser has evolved in astonishing ways. When they were first invented, they only retrieved plain text documents. This was useful for military and academic purposes, particularly for keeping up-to-date with the news.

Over time, the range of media formats that can be received by a browser increased. This means that rather than simply being text-based, web browsers now allow for images and videos to be shown. Most recently, browsers have become capable of playing 3D videos and can receive movement data from mobile devices. 

In addition, CSS was introduced to create increasingly more complex web designs. As HTML and CSS have grown, so have the browser tools used by web developers and designers. 