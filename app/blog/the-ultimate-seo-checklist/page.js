import Header from "../../components/header.js";
import Footer from "../../components/footer.js";

export default function SeoCheckist() {
  return (
    <div className="min-h-screen ">
      <Header></Header>

      <section>
        <div className="container mx-auto px-5 grid grid-cols-12 gap-4">
          <div className="lg:col-span-8 col-span-12">
            <div className="my-14">
              <h1 className="lg:text-text-5xl md:text-4xl text-3xl font-extrabold  md:mb-10 mb-5">
                The Ultimate SEO Checklist
              </h1>
              <div className="md:mb-10 mb-5 md:h-auto w-full">
                <img
                  src="https://www.theconnectiq.com/blog/wp-content/uploads/2021/06/fb-how-to-rank-higher-on-google.png"
                  alt="google1"
                />
              </div>
              <div>
                <ul className="md:text-xl">
                  <li className="mb-3">
                    Get ready to unlock the secrets to boosting your website’s
                    visibility on search engines!
                  </li>
                  <li className="mb-3">
                    We’ll take you through a range of items to setup to help you
                    optimise your website for search engines.
                  </li>
                  <li className="mb-3">
                    Plus, we’ll even answer some common SEO questions in FAQs
                    section. Let’s dive in!
                  </li>
                  <li className="mb-3">
                    <a href="#" className="text-blue-700">
                      SEO{" "}
                    </a>
                    can be a lot of work, but it’s worth it.
                  </li>
                  <li className="mb-3">
                    The best way to get people to your website is by making sure
                    your content is optimised for search engines. The more
                    visible you are, the more likely you’ll be found and the
                    more likely people will click on your link. Also, that means
                    more opportunities to convert prospects into customers
                  </li>
                  <li className="mb-3">
                    But there’s a lot that goes into SEO, and it can be
                    overwhelming. That’s why we wrote this SEO checklist—to give
                    you all the information you need to optimise your web pages
                    so they come up in search results.
                  </li>
                  <li className="mb-3">
                    We’ll cover SEO basics checklist, Technical SEO checklist,
                    On-pge SEO checklist, Content checklist, Keyword research
                    checklist, and FAQs.
                  </li>
                  <li className="mb-3">
                    We’ve broken down each step into easy-to-follow sections. So
                    you can easily find what you’re looking for, or refer back
                    to the whole checklist later if needed.
                  </li>
                  <li className="mb-3">So let’s get started!</li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="md:text-3xl text-2xl font-extrabold mb-3">
                How To Use This Checklist
              </h2>
              <div>
                <img
                  className="my-5 w-full md:h-auto"
                  src="https://rankmath.com/wp-content/uploads/2024/02/How-to-Check-Google-Rankings-1200x630-1.png"
                  alt="google2"
                />
              </div>

              <div>
                <ul className="mb-[30px] text-medium md:text-xl">
                  <li className="mb-3">
                    This SEO checklist is a diverse resource that will help you
                    understand the ins and outs of SEO and optimise your
                    website. Use it to stay on track and accomplish your goals.
                  </li>
                  <li className="mb-3">
                    Check off things on the list as you do them or cross off
                    tasks that you’ve already completed. You can also add notes
                    to any section of the checklist. This can help you keep
                    track of your progress and make a note of ideas you have for
                    future content campaigns.
                  </li>

                  <li className="mb-3">
                    But remember – this checklist isn’t a one-time thing. It’s a
                    guide for your long-term SEO strategy, and as time goes on,
                    it will become increasingly important to keep up with these
                    best practices. We’ll be keeping track of any changes so we
                    can keep our site up-to-date as best practices change.
                  </li>
                  <li className="mb-3">
                    You’ll also want to keep track of what’s working for you and
                    what isn’t, so that when you do need to revisit this
                    checklist again, you don’t have to start from scratch.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="md:text-3xl text-2xl font-extrabold mb-3">
                SEO Basics Checklist
              </h2>
              <div>
                <img
                  className="my-5 w-full md:h-auto"
                  src="https://rankmath.com/wp-content/uploads/2024/02/How-to-Check-Google-Rankings-1200x630-1.png"
                  alt="google2"
                />
              </div>
              <p className="mb-[30px] text-medium md:text-xl">
                If you’ve never done any SEO before (or if it’s been a while),
                this checklist will help you get up to speed. It pretty much
                covers the tools and plugins needed to rank in search engines.
                They don’t impact ranking – at least not directly. However,
                they’re more like housekeeping tasks that will set you up to
                rank higher in Google.
              </p>

              <div>
                <ul className="mb-[30px] text-medium md:text-xl text-blue-700 list-disc list-inside">
                  <li className="mb-3">
                    <a href="#">Set Up Google Search Console</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Set Up Bing Webmaster Tools</a>
                  </li>

                  <li className="mb-3">
                    <a href="#"> Set Up Ahrefs Webmaster Tools</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Set Up Google Analytics</a>
                  </li>
                  <li>
                    <a href="#">Using WordPress? Install Yoast SEO</a>
                  </li>
                </ul>
              </div>

              <div className=" mb-10">
                <h3 className="text-2xl mb-4 font-extrabold ">
                  Set Up Google Search Console
                </h3>
                <div className="mb-5">
                  <p className="md:text-xl mb-3">
                    <a href="#" className="text-blue-700">
                      Google Search Console
                    </a>{" "}
                    is a free tool that helps you monitor your website’s
                    performance in the search results. The performance report
                    tells you:
                  </p>
                  <ul className="list-disc list-outside pl-5">
                    <li>
                      <strong>
                        Which queries are sending the most traffic How often
                        users click on your site What your average position is
                        for each query.
                      </strong>
                    </li>
                    <li>
                      <strong>How often users click on your site</strong>
                    </li>
                    <li>
                      <strong>
                        What your average position is for each query.
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="md:text-xl mb-3">
                    You can use Search Console to:
                  </p>
                  <ul className="list-disc list-outside pl-5">
                    <li>
                      <strong>Optimise your site for search</strong>
                    </li>
                    <li>
                      <strong>Submit a sitemap</strong>
                    </li>
                    <li>
                      <strong>Check for crawl errors.</strong>
                    </li>
                  </ul>
                </div>
                <p className="md:text-xl">
                  The data can help you understand how people find and interact
                  with your site, as well as how to improve it.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Set Up Bing Webmaster Tools
                </h3>
                <div className="mt-4">
                  <p className="text-xl">
                    <a href="#" className="text-blue-700">
                      Bing Webmaster Tools
                    </a>{" "}
                    is a free service that allows you to manage your site’s
                    presence in Bing’s search results. It’s more like Google
                    Search Console. You can use Bing Webmaster Tools to:
                  </p>
                  <ul className="md:text-xl list-disc list-outside pl-5 mt-4">
                    <li className="mb-2">
                      <strong>Create a Sitemap</strong>
                    </li>
                    <li className="mb-2">
                      <strong>Submit sitemaps</strong>?
                    </li>
                    <li className="mb-2">
                      <strong>Monitor indexing status and crawl rate</strong>
                    </li>
                    <li className="mb-2">
                      <strong>Track keywords and traffic</strong>
                    </li>
                    <li className="mb-2">
                      <strong>Manage site reputation and more.</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Set Up Ahrefs Webmaster Tools
                </h3>
                <div className="mt-4">
                  <p className="text-xl mb-4">
                    <a href="#" className="text-blue-700">
                      Ahrefs Webmaster Tools (AWT)
                    </a>{" "}
                    is one of the most popular tools for SEO. It’s particularly
                    useful for getting insight into your competitors and
                    tracking your own performance.
                  </p>
                  <p className="text-xl">
                    This free tool gives you access to vital information about
                    your website’s performance, including:
                  </p>
                  <ul className="md:text-xl list-disc list-outside pl-5 mt-4">
                    <li className="mb-2">
                      <p>
                        <strong>Create a Sitemap:</strong> See how many people
                        are searching for topics on your site, what they’re
                        searching for, and how often they’re doing it.
                      </p>
                    </li>
                    <li className="mb-2">
                      <p>
                        <strong>Keyword Difficulty:</strong> Find out which
                        keywords are easy or difficult to rank in Google. So you
                        can focus on the ones that’ll bring you more traffic and
                        leads.
                      </p>
                    </li>
                    <li className="mb-2">
                      <p>
                        <strong>Organic Referral Traffic:</strong> See where
                        your organic search traffic is coming from. This can
                        help you identify gaps in your content marketing
                        strategy, find new sources of traffic, and optimise
                        existing content to attract more visitors from organic
                        search engines like Google or Bing.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Set Up Google Analytics
                </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      <p>
                        <a href="#">Google Analytics</a> is a free web analytics
                        tool that allows you to track your website’s traffic,
                        engagement, and conversions. By setting up Google
                        Analytics, you can gain valuable insights into how your
                        website is performing and where you need to make
                        changes.
                      </p>
                    </li>
                    <li className="mb-2">
                      <p>
                        You can use this information to see what’s bringing
                        people to your site and then create targeted content
                        that will keep them coming back.
                      </p>
                    </li>
                    <li className="mb-2">
                      <p>
                        <strong>Note:</strong> We recommend linking Google
                        Search Console to Google Analytics. This will make
                        importing data from Google Search Console to Google
                        Analytics easier.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Using WordPress? Install Yoast SEO
                </h3>
                <div className="mt-4">
                  <p className="md:text-xl mt-4">
                    Installing{" "}
                    <a href="#" className="text-blue-700">
                      {" "}
                      Yoast SEO
                    </a>{" "}
                    is a no-brainer if you’re using WordPress as your Content
                    Management System (CMS). It’s the most comprehensive,
                    easy-to-use plugin for optimising your website for search
                    engines.
                  </p>
                  <p className="md:text-xl mt-4">
                    There are lots of reasons why this is important, but here
                    are just a few:
                  </p>
                  <ul className="md:text-xl mt-4 list-disc list-outside pl-5">
                    <li className="mb-2">
                      Yoast SEO makes it easy to create a sitemap and submit it
                      to Google
                    </li>
                    <li className="mb-2">
                      It helps you optimise your content and metadata for search
                      engines
                    </li>
                    <li className="mb-2">
                      It gives you a better understanding of your site’s
                      performance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="md:text-3xl text-2xl font-extrabold mb-3">
                Technical SEO Checklist
              </h2>
              <div>
                <img
                  className="my-5 w-full md:h-auto"
                  src="https://rankmath.com/wp-content/uploads/2024/02/How-to-Check-Google-Rankings-1200x630-1.png"
                  alt="google2"
                />
              </div>
              <div>
                <ul className="mb-[30px] text-medium md:text-xl">
                  <li className="mb-3">
                    <a href="#" className="text-blue-700">
                      Technical SEO
                    </a>{" "}
                    is the process of making your website as technically sound
                    as possible. This means optimising your site in a way that
                    makes it easier for search engines to crawl and index your
                    content.
                  </li>
                  <li className="mb-3">
                    Technical SEO is one of the most important elements of your
                    digital marketing strategy. But it can also be one of the
                    most challenging.
                  </li>
                  <li className="mb-3">
                    This checklist will walk you through everything you need to
                    know about technical SEO. It will give you a practical guide
                    for getting started on your own technical SEO audit.
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mb-7 text-medium md:text-xl list-disc list-inside text-blue-700">
                  <li className="mb-3">
                    <a href="#">Fix Crawl Errors</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Ensure Your Site Is Mobile-Friendly</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Improve Page Speed</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Use Structured Data (Schema Markup)</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Check for Duplicate Content</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Secure Your Site With HTTPS</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Check for Broken Links and 301 Redirects</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Create a Robots.txt File</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Generate and Submit a Sitemap</a>
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Fix Crawl Errors</h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      <a href="#" className="text-blue-700">
                        Crawl errors
                      </a>{" "}
                      are pages that Googlebot could not successfully crawl or
                      render. Check your crawl errors regularly to fix them, so
                      they do not impact your website rankings.
                    </li>
                    <li className="mb-2">
                      Use Google Search Console to identify and fix errors that
                      are specifically affecting your web pages. It can be
                      Server Errors (
                      <a href="#" className="text-blue-700">
                        5xx HTTP status codes
                      </a>
                      ) or Soft{" "}
                      <a href="#" className="text-blue-700">
                        404 errors
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Ensure Your Site Is Mobile-Friendly
                </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      Over the past several years, there’s been a rapid surge of
                      traffic from mobile devices to websites. And it’s not just
                      limited to a few industries or website types — it’s
                      happening across all industries and types of sites.
                    </li>
                    <li className="mb-2">
                      With that in mind, it is crucial to make sure your website
                      is set up and ready for mobile users. The good news is
                      that most WordPress-based websites are ready for mobile
                      out of the box. For other content management systems or
                      custom-built websites, you want to make sure your site
                      follows these best practices when it comes to mobile
                      compatibility.
                    </li>
                    <li className="mb-2">
                      The first and most important step you can take to increase
                      your site’s mobile usability is to make sure that it meets
                      Google’s mobile-friendly criteria. There are several ways
                      to check whether your website is mobile-friendly.
                    </li>
                    <li className="mb-2">
                      One way to test whether your site is mobile-friendly is to
                      use{" "}
                      <a href="#" className="text-blue-700">
                        Google’s Mobile-Friendly Test Tool
                      </a>
                      . Another way to evaluate whether your site is
                      mobile-friendly is by using{" "}
                      <a href="#" className="text-blue-700">
                        Google’s PageSpeed Insights Tool
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Improve Page Speed</h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      Would you want to wait for a page to load? Of course not!
                    </li>
                    <li className="mb-2">
                      A slow website is a recipe for disaster. Studies show that{" "}
                      <a href="#" className="text-blue-700">
                        {" "}
                        40%
                      </a>{" "}
                      of users will abandon a site that takes longer than three
                      seconds to load.
                    </li>
                    <li className="mb-2">
                      Page load speed is also a ranking signal.{" "}
                      <a href="#" className="text-blue-700">
                        Google has confirmed it
                      </a>
                      , and we’ve seen it in practice. If your site loads
                      slowly, it will be more difficult to rank highly in
                      Google’s search results—or even show up at all.
                    </li>
                    <li className="mb-2">
                      Here are some tips for making sure your site is loading
                      fast:
                    </li>
                    <ul className="list-disc list-outside pl-5">
                      <li>
                        <strong>
                          Delete unnecessary files from the server:
                        </strong>{" "}
                        This means images or videos that aren’t being used on
                        the page (and yes, even those stock photos!).
                      </li>
                      <li>
                        <strong>
                          Use CSS instead of JavaScript for animations:
                        </strong>{" "}
                        This will keep them running smoothly without slowing
                        down the page load time.
                      </li>
                      <li>
                        <strong>Optimise images for size:</strong> This means
                        using compression software so that your images don’t
                        take up too much space on the server (and therefore take
                        longer to load).
                      </li>
                      <li>
                        <strong>Use a Content Delivery Network (CDN):</strong>{" "}
                        <a href="#" className="text-blue-700">
                          Content Delivery Networks
                        </a>{" "}
                        (CDNs) are networks that are geographically dispersed
                        and cached with the same content. They improve page
                        speed by allowing users to access your website from the
                        closest server, increasing performance. You can use a
                        CDN for all static assets like images and videos or just
                        for specific ones.
                      </li>
                    </ul>
                    <li className="mb-2">
                      But how do you check for page speed in the first place?
                    </li>
                    <li className="mb-2">
                      There are several ways to check your site’s page speed,
                      including third-party tools like{" "}
                      <a href="#" className="text-blue-700">
                        Pingdom
                      </a>{" "}
                      and Google{" "}
                      <a href="#" className="text-blue-700">
                        PageSpeed Insights
                      </a>
                      . If you have an e-commerce site, Pingdom also has a tool
                      specifically for checking the speed of your checkout
                      process
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Use Structured Data (Schema Markup)
                </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      <a href="#" className="text-blue-700">
                        Structured data
                      </a>{" "}
                      is the future of SEO. You’ve probably heard that before,
                      but what does it mean?
                    </li>
                    <li className="mb-2">
                      Not only can structured data help you optimise your site
                      for Google. It also helps users find your content more
                      easily.
                    </li>
                    <li className="mb-2">
                      <strong>Here’s an example:</strong>
                    </li>
                    <li className="mb-2">
                      Let’s say you want to write an article about a restaurant
                      called “Pizza Hut.” Well, you could use structured data or{" "}
                      <a href="#" className="text-blue-700">
                        schema markup
                      </a>{" "}
                      to specify that they have a location in New York City and
                      another in Chicago. Also, you can include other details
                      like their address and phone number.
                    </li>
                    <li className="mb-2">
                      This helps users who are looking for Pizza Hut know where
                      to find them, even if they don’t know the exact address
                      yet (which could be helpful when using public
                      transportation).
                    </li>
                    <li className="mb-2">
                      Structured data is also important because it helps search
                      engines understand the purpose of each page on your site.
                      Which means they can give them higher rankings in search
                      results.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Check for Duplicate Content
                </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      Duplicate content is harmful to SEO, and it’s important to
                      find and fix it quickly. If your site has duplicate
                      content issues, you’re literally spending time and money
                      to compete with yourself instead of focusing on the
                      competition.
                    </li>
                    <li className="mb-2">
                      Check for duplicate content by using a tool like{" "}
                      <a href="#" className="text-blue-700">
                        Siteliner
                      </a>
                      . This can help you check if there are multiple pages on
                      your site with the same or very similar content.
                    </li>
                    <li className="mb-2">
                      There are a few reasons why this might be happening. You
                      may have accidentally created two separate pages with
                      similar content. Or you might have pagination issues so
                      that the same URL is getting indexed twice.
                    </li>
                    <li className="mb-2">
                      Siteliner will show you how many words on each page are
                      duplicated. This will help you identify where the
                      duplicate content is coming from.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Secure Your Site With HTTPS
                </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      The internet is open to all sorts of dangers and threats.
                    </li>
                    <li className="mb-2">
                      Some hackers want to steal your passwords or credit card
                      information. Also, some websites have been compromised by
                      malicious actors who want to use them as platforms for
                      spreading their own content.
                    </li>
                    <li className="mb-2">
                      The best thing you can do to protect yourself from these
                      threats is to make sure your website is secure. And the
                      easiest way to do that is by using{" "}
                      <a href="#" className="text-blue-700">
                        HTTPS
                      </a>
                      .
                    </li>
                    <li className="mb-2">
                      HTTPS is a secure version of the{" "}
                      <a href="#" className="text-blue-700"></a>HTTP protocol.
                      It encrypts the connection between your web server and
                      your visitor’s browser, adding an extra layer of security
                      to your website.
                    </li>
                    <li className="mb-2">
                      When you use HTTPS on your site, you’re telling search
                      engines that you care about the security of your site’s
                      visitors.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Check for Broken Links and 301 Redirects
                </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      <a href="#" className="text-blue-700">
                        Broken links
                      </a>{" "}
                      are an SEO nightmare. If you don’t keep close tabs on your
                      site’s content, you can end up with a lot of dead pages.
                      These pages cause your overall site to rank poorly, as
                      they’ll be less likely to show up in search engine
                      results.
                    </li>
                    <li className="mb-2">
                      If you find a broken link on your site, fix it immediately
                      by either replacing the URL with another article that
                      doesn’t link to this one or creating a{" "}
                      <a href="#" className="text-blue-700">
                        301 redirect
                      </a>{" "}
                      so that Google will update its indexing accordingly.
                    </li>
                    <li className="mb-2">Don’t know what a 301 redirect is?</li>
                    <li className="mb-2">
                      It’s a way to tell search engines that the URL of a
                      certain page has permanently moved. This helps you keep
                      your SEO rankings high because it tells search engines
                      where that page has moved to. Without this, you could lose
                      all the traffic and link juice from people who used to go
                      to that page.
                    </li>
                    <li className="mb-2">
                      Start by creating a list of all the URLs that are
                      currently linking to your site. This can be done using a
                      tool such as{" "}
                      <a href="#" className="text-blue-700">
                        Screaming Frog SEO Spider
                      </a>
                      . Then, check each URL to see if it’s still active. If
                      not, set up a 301 redirect so that visitors are directed
                      to your new page instead.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Create a Robots.txt File
                </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      Each page on your site should have its own unique URL so
                      that Google can crawl it easily and rank it appropriately
                      in search results.
                    </li>
                    <li className="mb-2">
                      But sometimes, you want to prevent search engines from
                      crawling or indexing certain pages. For example, when
                      you’re testing a new layout or CMS system or when you’re
                      redesigning the entire site.
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-blue-700">
                        Robots.txt
                      </a>{" "}
                      is the best way to tell Google not to index your site’s
                      pages. It’s like a set of rules that the crawler follows
                      so it knows what to look for, and what not to look for. A
                      robots.txt file is placed in the root directory of your
                      website, for example, www.example.com/robots.txt.
                    </li>
                    <li className="mb-2">
                      A good robots.txt file will help you prevent duplicate
                      content issues, keep bots from crawling sensitive
                      information like passwords or payment details, and
                      generally ensure that your content gets indexed in the way
                      you want it to be indexed.
                    </li>
                    <li className="mb-2">
                      If you are using a content management system (CMS) like
                      WordPress, Drupal, Joomla, or others, you will probably
                      have a robots.txt file with your site. If not, you might
                      have to create one using a text editor and then upload it
                      to the root of your domain. Also, you can use free
                      robots.txt.file generator tools, such as{" "}
                      <a href="#" className="text-blue-700">
                        SureOak Robots.txt File Generator
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">
                  Generate and Submit a Sitemap
                </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                      A sitemap is a list of all the pages on your website. It’s
                      what Google and other search engines use to crawl your
                      site.
                    </li>
                    <li className="mb-2">
                      You’ll need to install an{" "}
                      <a href="#" className="text-blue-700">
                        XML sitemap
                      </a>{" "}
                      generator plugin on your website to generate one. Once
                      installed, you can create a sitemap from your WordPress
                      dashboard.
                    </li>
                    <li className="mb-2">
                      If you’re using a different CMS other than WordPress, you
                      may need to generate your sitemap manually.
                    </li>
                    <li className="mb-2">
                      Once you create your sitemap, you’ll need to submit it to
                      Google Search Console (formerly Google Webmaster Tools) or
                      Bing Webmaster Tools.
                    </li>
                    <li className="mb-2">
                      <strong>Note:</strong> When submitting your sitemap, also
                      ensure to reference it in your robots.txt file.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="md:text-3xl text-2xl font-extrabold mb-3">
              On-Page SEO Checklist
              </h2>
              <div>
                <img
                  className="my-5 w-full md:h-auto"
                  src="https://rankmath.com/wp-content/uploads/2024/02/How-to-Check-Google-Rankings-1200x630-1.png"
                  alt="google2"
                />
              </div>
              <div>
                <ul className="mb-[30px] text-medium md:text-xl">
                  <li className="mb-3">
                  We’ve found that most people don’t know what on-page SEO is. So we’ll start with a quick definition.
                  </li>
                  <li className="mb-3">
                  On-page SEO is the process of optimising your content to rank higher in search engine results pages <a href="#">(SERPs)</a>. But it’s not just for better rankings. On-page SEO is also about ensuring your website is easy to read by improving the user experience.
                  </li>
                </ul>
              </div>
              <div>
                <ul className="mb-7 text-medium md:text-xl list-disc list-inside text-blue-700">
                  <li className="mb-3">
                    <a href="#">Use Your Focus Keyword In The URL</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Use Short URLs</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Use Target Keyword In Your Title Tag (Front-Load It)</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Write A Compelling Meta Description That Includes Your Keywords </a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Embed Title Tag Modifiers</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Use Your Primary Keyword Once In The First and Last 100-200 Words</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Use Your Keyword in H1, H2, or H3 Tags</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Image Optimisation</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Include Multiple LSI Keywords In Your Content</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Use External Links</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Use Internal Links</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Use Featured Snippets</a>
                  </li>
                  <li className="mb-3">
                    <a href="#">Optimise For User Engagementm</a>
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Use Your Focus Keyword In The URL</h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    If you’re not using your focus keyword in your URL, you need to take a step back and evaluate what’s going on. The URL is the first thing people see when they land on your website. So, if it doesn’t match what they’re looking for, you will lose them before they even get started.
                    </li>
                    <li className="mb-2">
                    Using the focus keyword in the URL makes it as descriptive as possible. It reinforces the core topic and shows users that your content is relevant.
                    </li>
                    <li className="mb-2">
                    Though one of the most basic on-page SEO checks, it’s also one of the easiest ways to get a boost in rankings. In fact, a keyword-rich URL will significantly increase your click-through rate <a href="#" className="text-blue-700">(CTR)</a> for organic searches.
                    </li>
                    <li className="mb-2">
                    Let’s say our target keyword is “SEO ChecKlist,” and our website is “bigworld.com.” From this, we can make the URL: bigworld.com/seo-checklist. Notice we’ve included the focus keyword “SEO Checklist” in our URL.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Use Short URLs</h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    Short URLs are better for SEO than long ones. They’re easier to remember, and they don’t take up as much space on a page.
                    </li>
                    <li className="mb-2">
                    Do you know what else is great about short URLs? Well, they rank better. That’s right. Short URLs rank best in Google because they’re easier for people to read and easier for search engines like Google to crawl and index.
                    </li>
                    <li className="mb-2">
                    To prove it, Baclinko analyzed over 11.8 million Google search results. The report shows that Google rankings decline as URL characters increase. (<a href="#" className="text-blue-700">backlinko.com</a>)
                    </li>
                    <li className="mb-2">
                    So how do you get a short URL? It’s easy! Just go to the <a href="#" className="text-blue-700">Bitly</a> shortener tool and create one for your website. With this tool, you can even track how many people click on them!
                    </li>
                    <li className="mb-2">
                    Here’s how to use it:
                    </li>
                    <li className="mb-2">
                    <strong>Step 1:</strong> Go to bitly.com and sign up for an account by clicking “Get Started.” You’ll need to give them your email address and create a password.
                    </li>
                    <li className="mb-2">
                    <strong>Step 2:</strong> Click “Shorten” from the left-hand side of the page.
                    </li>
                    <li className="mb-2">
                    <strong>Step 3:</strong> Enter the URL you want to shorten into the box provided and click “Shorten.”
                    </li>
                    <li className="mb-2">
                    <strong>Step 4:</strong> Copy the shortened link and paste it wherever you’d like!
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Use Target Keyword In Your Title Tag (Front-Load It)</h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    When it comes to on-page SEO, the title tag is one of the most important elements. This is because Google and other search engines use this information to determine what your page is about. 
                    </li>
                    <li className="mb-2">
                    The first thing you should do when writing your title tag is to use the target keyword at its beginning. This is called front-loading, and according to <a href="#"className="text-blue-700">Moz</a>, it has more impact on search rankings.
                    </li>
                    <li className="mb-2">
                    It helps users know what to expect from your page before they click on it, improving click-through rates. Also, according to user experience research, <a href="#"className="text-blue-700">people tend to scan as few as the first 2 words of a headline</a>. And this is why we recommend putting the keyword closer to the beginning of your title tag.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Write A Compelling Meta Description That Includes Your Keywords </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    Meta descriptions are the brief snippets of text that appear under the URL in search results. If you haven’t written a meta description for your site, you’ve likely got something generic like “This is my website” or “Read more here.” This isn’t good enough.
                    </li>
                    <li className="mb-2">
                    Instead, you should write a meta description that includes your target keywords. This will help search engines understand your content and increase your click-through rate.
                    </li>
                    <li className="mb-2">
                    However, don’t try to stuff too many keywords into a single description—you’ll end up with something that doesn’t make sense or sounds spammy! Also, try putting a few related keywords at the beginning of the description. They’ll be indexed by search engines more easily, but they won’t take up too much space in the description itself.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Embed Title Tag Modifiers</h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    Title tag modifiers are words and phrases you add to your title tag. For instance, when writing an article on choosing tents for camping, you can use modifiers like “best,” “top, ” or even “year.” It helps you emphasize that yours is the best article on choosing tents.
                    </li>
                    <li className="mb-2">
                    In the example above, we’ve used “best” and “Year (2022)” as our title tag modifiers. Did you know? Modifiers also help your title tag rank for more <a href="#" className="text-blue-700">long-tail</a>variations of your target keyword. Plus, they make the title more interesting for readers and search engines.
                    </li>
                    <li className="mb-2">
                    However, don’t try to stuff too many keywords into a single description—you’ll end up with something that doesn’t make sense or sounds spammy! Also, try putting a few related keywords at the beginning of the description. They’ll be indexed by search engines more easily, but they won’t take up too much space in the description itself.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Use Your Primary Keyword Once In The First and Last 100-200 Words </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    We’re pretty sure you’ve heard this one before. If not, it’s time to start paying attention! This is a tried and true technique for boosting your rankings in search engines like Google. It’s been around for years, and it works!
                    </li>
                    <li className="mb-2">
                    You want to make sure that your primary keyword is present in your content’s first and last 100-200 words. It helps Google understand your page and gives it context for all the content on the page. It also helps with SEO by making sure that you are telling Google what the page is about right away. In fact, Google tends to give more weight to the <a href="#"className="text-blue-700">first 200 words</a> of your page body section.
                    </li>
                    <li className="mb-2">
                    Alternatively, you can use your focus keyword in the first paragraph, which pretty much constitutes the first 100-200 words.
                    </li>
                    <li className="mb-2">
                    The first paragraph of any document is arguably the most important. It’s not only where you have the best chance to grab your reader’s attention and make them want to keep reading. It’s also where you can give them valuable information about what they’re going to learn.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Use Your Keyword in H1, H2, or H3 Tags </h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    H1, H2, and H3 tags are used for organizing content and identifying the most important sections of your page.
                    </li>
                    <li className="mb-2">
                    H1 tags are used to give an overview of the page’s topic and are typically the page’s title. H2 tags are used to divide sections within a page and should be used at least once per section. H3 tags can also divide sections within a page and should also be used at least once per section.
                    </li>
                    <li className="mb-2">
                    It’s important to make sure that your site is optimised for keyword phrases relevant to your site’s content. This means putting the keywords in H1, H2, or H3 tags. It will help search engines understand what your page is about and give them a better idea of how to rank it..
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Image Optimisation</h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    The image you use in your article can be just as important as the words. In fact, you can often achieve better results by focusing on optimising images rather than text.
                    </li>
                    <li className="mb-2">
                    Use alt tags on all images used on your website. The alt tag is the alternative description for an image that pops up when someone hovers their mouse over it. It should be descriptive and relevant to what the image represents in terms of content on your site.
                    </li>
                    <li className="mb-2">
                    For example, if you’re using an image as part of a blog post about how to fix your car engine, it would be helpful if this was reflected in the alt tag such as “how-to-fix-your-car-engine.”
                    </li>
                    <li className="mb-2">
                    Also, we recommend using a relevant keyword in the alt image tag. But don’t force or stuff keywords – use them naturally.
                    </li>
                    <li className="mb-2">
                    Moreover, ensure all images have been appropriately sized and optimised for web use. Any image on your page must be properly resized so that it doesn’t take up too much space and slow download times. Still, it should maintain its original quality without losing detail or clarity.
                    </li>
                    <li className="mb-2">
                    Essentially, image optimisation helps improve page load speed, boost websites’ SEO ranking, and improve user experience.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Include Multiple LSI Keywords In Your Content</h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    You’ll need to include multiple variations of the same keyword in your content. This is called Latent Semantic Indexing (LSI).
                    </li>
                    <li className="mb-2">
                    You should use long-tail keywords because they tend to have higher search volumes than broad keywords. Also, they are less competitive and make your content more relevant to users.
                    </li>
                    <li className="mb-2">
                    For example, if you’re writing about how to make banana bread, don’t just throw in the word “banana” once or twice. Instead, make sure that you include other words that relate to bananas—like “fruit,” “vegetable,” “dessert,” and so on.
                    </li>
                    <li className="mb-2">
                    So how can you find LSI keywords?
                    </li>
                    <li className="mb-2">
                    <strong>LSI graph:</strong> One of the best tools for this is the <a href="#" className="text-blue-700">LSI graph</a>, which gives you a visual representation of all of the words that are associated with any given term. It also shows you how closely related those words are. This means that you can use it to find new ideas for keywords that are similar but not exactly the same as what people are already searching for.
                    </li>
                    <li className="mb-2">
                    <strong>Serpstat:</strong><a href="#" className="text-blue-700"> Serpstat</a> gives you access to a wide range of keyword suggestions based on the competition level for any given term. It also provides information about how many times each keyword has been searched over time. You can sort by keyword difficulty so that you don’t waste time trying to rank for terms that are too competitive for your site or blog.
                    </li>
                    <li className="mb-2">
                    <strong>Google autocomplete: </strong> You can find lots of good LSI keywords by looking at Google’s suggestions when you start typing in a phrase. For example, if you were trying to find keywords related to “banana,” you might see suggestions like “banana cake, “banana calories,” or “banana bread.” This is a great way to get started with your list of LSI keywords!
                    </li>
                    <li className="mb-2">
                    <strong>Google-related searches:</strong> You can also use Google-related searches as an LSI keyword tool. You can find this feature by typing in a search term and then clicking on the “related searches” option at the bottom of the page. This will show you other searches people have been making around the web for similar topics.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-extrabold">Use External Links</h3>
                <div className="mt-4">
                  <ul className="md:text-xl mt-4">
                    <li className="mb-2">
                    <a href="#">External links</a> are links from your website or blog to other websites, blogs, or social media. External links help to spread awareness of your brand or product.
                    </li>
                    <li className="mb-2">
                    If a site has many quality external links, it will more likely be perceived as a credible source, and people will return to your page. It also helps search engines determine how your website or blog ranks on the list of search results. In fact, SEO experts believe that external links are easily the <a href="#" className="text-blue-700">most important source of ranking power</a>.
                    </li>
                    <li className="mb-2">
                    For instance, if several pages link to a page, the page is more likely to rank high. If a few pages link to the page, it has less chance of ranking high. No links and you’re nowhere.
                    </li>
                    <li className="mb-2">
                    You should consider linking to other relevant websites and getting them to link back to you. It gives readers of your website information they might not otherwise have been able to find.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
