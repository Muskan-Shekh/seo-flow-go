import Header from "../../components/header.js";
import Footer from "../../components/footer.js";

// const blogPosts = {
//   "how-to-rank-images-in-google": {
//     title: "How to Rank Images in Google",
//     date: "25 March 2023",
//     content: `
//       Ranking images in Google requires a combination of SEO techniques,
//       including optimizing image file names, adding alt text, and ensuring fast page load times.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid alias temporibus quasi suscipit consequatur nobis accusamus dolor sit ab. Iusto ad nihil fugit harum modi quis, recusandae fuga doloremque quos.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid alias temporibus quasi suscipit consequatur nobis accusamus dolor sit ab. Iusto ad nihil fugit harum modi quis, recusandae fuga doloremque quos.
//     `,
//   },
//   "the-ultimate-seo-checklist": {
//     title: "The Ultimate SEO Checklist",
//     date: "25 February 2023",
//     content: `
//       This checklist covers everything you need to optimize your website,
//       from meta tags to backlinks and everything in between.
//     `,
//   },
// };

export default function BlogPost() {
  // const { slug } = params;
  // const post = blogPosts[slug];

  // if (!post) {
  //   return <p>Post not found!</p>;
  // }

  return (
    <div className="min-h-screen ">
      <Header></Header>
      {/* <section className="py-[50px]"> 
  <div className="container mx-auto px-[20px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14">
      
      <div className="lg:my-[100px] md:my-[50px] ">
        <h1 className="lg:text-[50px] lg:leading-[64px] md:text-[35px] md:leading-[48px] text-[28px] leading-[35px] text-white font-bold mb-4">
        How to Rank Images in Google
        </h1>
        <p className="md:text-[21px] md:leading-[35px] text-[18px] leading-[26px] text-white font-regular mb-8">
         To rank images in Google, you need to focus on proper optimization techniques such as using high-quality, relevant images, renaming files with descriptive keywords, and adding meaningful alt text. Compressing images without losing quality helps improve page speed, which is a crucial ranking factor. Additionally, using structured data (Schema Markup) can enhance visibility in search results. Placing images in relevant content, obtaining backlinks, and ensuring fast loading times through lazy loading and a CDN further boost rankings. Finally, submitting your images to Google Search Console ensures proper indexing, increasing their chances of appearing in search results.
        </p>
        <div className="mb-4 flex flex-col sm:flex-row items-center gap-4">
  <input 
    type="text" 
    placeholder="Enter Your Website" 
    className="px-6 py-3 rounded-lg w-full sm:w-auto"
  />
  <div className="w-full sm:w-auto">
    <a 
      href="#" 
      className="block text-center px-6 py-3 bg-gray-500 text-white rounded-lg sm:inline-block hover:bg-white hover:text-[grey]"
    >
      Send Me a Proposal →
    </a>
  </div>
</div>
      </div>

      <div className="relative  md:flex flex-col items-center justify-center">
        <div className="relative hidden w-full md:flex flex-wrap justify-center gap-6">
          <div className="relative [perspective:1000px]">
            <div className="body-bubble w-[180px] h-[180px] relative transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg  [backface-visibility:hidden]">
                <div className="lg:text-[50px] text-[40px] font-bold">91%</div>
                <h5 className="text-[18px] font-semibold">Retention Rate</h5>
                <p className="text-[14px] font-normal opacity-80">Industry avg: 50%</p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center text-center justify-center bg-indigo-700  w-[180px] h-[180px] rounded-full text-white p-4 [transform:rotateY(180deg)]  [backface-visibility:hidden]">
                <h5 className="text-sm font-medium">WHY IS OUR RETENTION RATE SO HIGH?</h5>
                <p className="text-xs mt-2 text-center">Scalable solutions <br /> Industry specialists <br /> Proven results</p>
              </div>
            </div>
          </div>

         
          <div className="relative [perspective:1000px]">
            <div className="body-bubble w-[180px] h-[180px] relative transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex flex-col text-center items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg  [backface-visibility:hidden]">
                <div className="lg:text-[50px] text-[40px] font-bold">93%</div>
                <h5 className="text-[18px] font-semibold">Client Satisfaction Score</h5>
                <p className="text-[14px] font-normal opacity-80">Industry avg: 72%</p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center text-center justify-center bg-teal-700 rounded-full text-white p-4 [transform:rotateY(180deg)]  [backface-visibility:hidden]">
                <h5 className="text-sm font-bold">WHY IS OUR SATISFACTION SCORE SO HIGH?</h5>
                <p className="text-xs mt-2 text-center">Project management <br /> ROI tracking <br /> Diverse skillsets</p>
              </div>
            </div>
          </div>

          <div className="relative [perspective:1000px]">
            <div className="body-bubble w-[180px] h-[180px] relative transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg   [backface-visibility:hidden]">
                <div className="lg:text-[50px] text-[40px] font-bold">420%</div>
                <h5 className="text-[18px] font-semibold">Higher NPS® Score</h5>
                <p className="text-[14px] font-normal opacity-80">Industry avg: 16</p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-pink-700 rounded-full text-white p-4 [transform:rotateY(180deg)]  [backface-visibility:hidden]">
                <h5 className="text-sm font-bold">WHY IS OUR NPS SO HIGH?</h5>
                <p className="text-xs mt-2 text-center">Turn-key solutions <br /> Real business results <br /> Consistent communication</p>
              </div>
            </div>
          </div>
        </div>

        <div className="appr_hero-stat-card mt-[50px] bg-[white] max-w-[431px] min-h-[260px] text-black z-0 rounded-[10px] md:py-[32px] md:px-[40px] py-[16px] px-[20px]">
          <p className="_text lg:text-[26px] md:text-[22px] text-[19px]">
            “I have 16 years of industry experience, and WebFX is the best agency I’ve ever worked with.”
          </p>
          <h4  className="_by text-[grey] font-medium flex items-center my-[20px]">
            <img className="pr-[10px]" loading="lazy" src="https://www.webfx.com/wp-content/uploads/2023/09/clutch-icon.png" alt="Clutch icon" />
            Flavia A, Review from Clutch.co
          </h4>
          <div className="_ratings">
            <div className="_rating">
              <img loading="lazy" src="https://www.webfx.com/wp-content/uploads/2023/09/5-star-rating.png" alt="Five red stars" />
              <span>Rated 4.8/5 stars on G2</span>
            </div>
            <div className="_rating">
              <img loading="lazy" src="https://www.webfx.com/wp-content/uploads/2023/09/5-star-rating.png" alt="Five red stars" />
              <span>Rated 4.9/5 stars on Clutch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

      <section>
        <div className="container mx-auto px-[20px] grid grid-cols-12 gap-4">
          <div className="lg:col-span-8 col-span-12">
            <div className="mt-[50px]">
              <h1 className="lg:text-[48px] md:text-[42px] text-[28px] font-extrabold md:leading-[56px] leading-[36px]  md:mb-[40px] mb-[20px]">
                How to rank images in Google
              </h1>
              <div className="md:mb-[40px] mb-[20px] md:h-[400px] w-full">
                <img
                  src="https://www.theconnectiq.com/blog/wp-content/uploads/2021/06/fb-how-to-rank-higher-on-google.png"
                  alt="google1"
                />
              </div>
              <div className="md:text-[21px] mb-[20px]">
                <p className="mb-[20px]">
                  You may not know it, but every Google search result page is a
                  battle-zone of millions of websites each competing for the top
                  10 positions. Look a tab over, however and you might see a
                  blue-ocean of untapped possibilities.{" "}
                </p>

                <p className="mb-[20px]">
                  According to Alexa, www.google.com accounts for 55% of all web
                  traffic, where images.google.com accounts for 10.1% of
                  traffic. So, the ratio of Google image traffic to Google web
                  search is 1:5.5.
                  <a href="#" className="text-blue-700">
                    (quora.com)
                  </a>
                </p>
                <p>
                  Still, Google images are still be a major source of traffic.
                  According to Moz, images searches can account for 20-60% of
                  all visits from Google. In fact, the saying “a picture is
                  worth a thousand words” has never been truer.
                  <a href="#" className="text-blue-700">
                    (moz.com)
                  </a>
                </p>
              </div>
            </div>

            <div className="my-[50px]">
              <div>
                <h2 className="md:text-[28px] text-[22px] font-extrabold leading-[35px] mb-[10px]">
                  Why Optimise Images for Google Image Search?
                </h2>
                <div>
                  <img
                    className="my-[20px] w-full md:h-[400px]"
                    src="https://rankmath.com/wp-content/uploads/2024/02/How-to-Check-Google-Rankings-1200x630-1.png"
                    alt="google2"
                  />
                </div>
                <p className="md:text-[21px] mb-[20px]">
                  Let’s explore the benefits of optimising your images for
                  Google Images and see how it can help you increase your
                  traffic to your website.
                </p>

                <div>
                  <ul className="list-disc list-inside mb-[30px] text-blue-700 text-medium md:text-[20px]">
                    <li>
                      <a href="#">More Awareness of Your Brand and Products</a>
                    </li>
                    <li>
                      <a href="#">Increases Site’s Visibility In SERPs</a>
                    </li>
                    <li>
                      <a href="#">Increases Click-Through Rate (CTR)</a>
                    </li>
                    <li>
                      <a href="#">Increase User Engagement</a>
                    </li>
                    <li>
                      <a href="#">Offers Faster-Loading Speed</a>
                    </li>
                    <li>
                      <a href="#">Free Link Building Opportunities</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  More Awareness of Your Brand and Products
                </h3>
                <p className="md:text-[21px]">
                  When people search for something online, they often rely on
                  images to help them find the product or service that matches
                  their needs. When images are optimised for search engines and
                  for social media, they can help your brand get noticed in the
                  crowd of competitors who are also vying for attention.
                </p>
              </div>
              <div className="mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Increases Site’s Visibility In SERPs
                </h3>
                <p className="md:text-[21px]">
                  It’s good for SEO because you’re prioritising page speed and
                  user experience (the two main factors that contribute to
                  ranking). Search engines will love it! And the more search
                  engines like your site, the higher it will rank in their
                  results. This means more traffic and more sales.n.
                </p>
              </div>

              <div className="mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Increases Click-Through Rate (CTR)
                </h3>
                <p className="md:text-[21px]">
                  By optimizing your images, so Google’s algorithm easily
                  identifies them, you can help increase the number of clicks
                  they receive. This means more traffic and exposure—which
                  translates into more sales!
                </p>
              </div>

              <div className="mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Increase User Engagement
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-2">
                      Optimizing your images is one of the best ways to increase
                      user engagement on your site.
                    </li>
                    <li className="mb-2">
                      The reason is simple: if you want people to spend more
                      time on your site, they’re going to need something to look
                      at—and what better way than an image?
                    </li>
                    <li className="mb-2">
                      By optimizing that image, you can make it easier for users
                      to digest and understand what you’re trying to say.
                    </li>
                    <li className="mb-2">
                      Plus, since most people are visual learners, it’s good
                      practice to give them something with which they can
                      associate what you’re saying in the text.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Offers Faster-Loading Speed
                </h3>
                <p className="md:text-[21px] mb-2">
                  Yes. Optimizing images increases loading speed.
                </p>
                <p className="md:text-[21px]">
                  Images are typically the largest files that load on your
                  website, and they can make up to 90% of its size. If you
                  optimize the images on your site, you will reduce their file
                  size and therefore improve page load time. And that means more
                  conversions and a better customer experience..
                </p>
              </div>

              <div className="mb-[20px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Free Link Building Opportunities
                </h3>
                <div>
                  <ul className="text-[21px]">
                    <li className="mb-3">
                      If you’re looking for free link building opportunities,
                      there are plenty of ways to get them. One way is by
                      sharing optimized images on social media.
                    </li>
                    <li className="mb-3">
                      Sharing optimised images on social media is a great way to
                      get links back to your site. Why? Because it’s easy for
                      people to share them with their followers. And when those
                      followers see the image in their newsfeed, they’ll be more
                      likely to click through and read what it contains—which
                      means more traffic for you!
                    </li>
                    <li className="mb-3">
                      Now that we know Google Images is important for attracting
                      web traffic, let’s dive in to how you can attract web
                      traffic from Google Images.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" mb-[50px]">
              <div className="mb-[50px]">
                <h2 className="md:text-[28px] text-[22px] font-extrabold leading-[30px]">
                  Google Images Best Practices
                </h2>
                <div className="py-[20px] w-full md:h-full">
                  <img
                    src="https://www.bloggeroutreach.io/wp-content/uploads/2023/02/25-Proven-Ways-To-Increase-Your-Google-Ranking.jpg"
                    alt="gooogle3"
                  />
                </div>
                <p className="md:text-[21px] mb-[40px]">
                  This section will discuss some of the best practices for
                  optimizing your images for Google Images search results.
                </p>

                <div>
                  <ul className="list-disc list-inside mb-[30px] text-blue-700 text-medium md:text-[20px]">
                    <li>
                      <a href="#">
                        Optimize page metadata (title and meta description)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Free Link Building OpportunitiesFree Link Building
                        Opportunities
                      </a>
                    </li>
                    <li>
                      <a href="#">Use Alt Text To Give The Image Context</a>
                    </li>
                    <li>
                      <a href="#">Use Images In The Right Context </a>
                    </li>
                    <li>
                      <a href="#">Implement Structured Data</a>
                    </li>
                    <li>
                      <a href="#">Optimize for Speed</a>
                    </li>
                    <li>
                      <a href="#">Use Descriptive File Names</a>
                    </li>
                    <li>
                      <a href="#">Choose The Right File Format</a>
                    </li>
                    <li>
                      <a href="#">
                        Make Sure Your Image Is Working Across Devices
                      </a>
                    </li>
                    <li>
                      <a href="#">Put Your Images High Up On The Paget</a>
                    </li>
                    <li>
                      <a href="#">Add A Descriptive Caption </a>
                    </li>
                    <li>
                      <a href="#">Use Internal Linking on Your Images</a>
                    </li>
                    <li>
                      <a href="#">Use A Sitemap To Index All Images</a>
                    </li>
                    <li>
                      <a href="#">Add A Watermark To Secure Your Images</a>
                    </li>
                    <li>
                      <a href="#">SafeSearch</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Optimize page metadata (title and meta description)
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      You can optimize your images for ranking in Google by
                      optimizing the page metadata. This includes the title and
                      meta description of the page, which are the first things
                      that searchers will see when they click on a search
                      result.
                    </li>
                    <li className="mb-3">
                      The title should be descriptive of the image. But it
                      should also be short enough to fit into a single line
                      (about 50-60 characters). According to Moz, if you keep
                      your title tag under 60 characters, there’s a 90% chance
                      it will display properly in the SERPs.
                    </li>
                    <li className="mb-3">
                      Write a meta description that describes what the image is
                      about and why people would want to click on it. Generally,
                      the meta description should be about 150 characters long.
                    </li>
                    <li>
                      <strong>Note:</strong> Include keywords related to your
                      topic in the title tag and meta description. However,
                      don’t go overboard with keyword stuffing!
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Create High-Quality Images
                </h3>
                <p className="md:text-[21px]">
                  Make sure your photos are sharp, properly exposed, and
                  well-composed. Use proper lighting levels and make sure there
                  is contrast. Also, ensure to avoid clutter in the background
                  and take pictures at the right angle
                </p>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Use Alt Text To Give The Image Context
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      Google uses computer vision to understand the content of
                      an image. So adding text next to your images can give
                      Google more context about what the image is showing.
                    </li>
                    <li className="mb-3">
                      The alt text attribute is a good place to provide this
                      helpful information. It acts as a description of the
                      image, helping Search understand what the image shows.
                    </li>
                    <li className="mb-3">
                      Creating alt text for the images on your website is not
                      only an essential part of SEO. It’s also ADA compliant. It
                      improves accessibility for users who can’t see images on
                      web pages. This includes those that use assistive
                      technology, such as screen readers.
                    </li>
                    <li>
                      Also, don’t forget to use target keywords in your alt
                      text. Adding relevant keywords to your alt text will
                      increase Google’s chances of using those keywords when
                      indexing the image. However, avoid keyword stuffing.
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Use Images In The Right Context
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      All other factors being equal, Google prefers images that
                      have a natural relationship to the page’s topic.
                      Therefore, show the image in the context of a relevant
                      post or page.{" "}
                    </li>
                    <li className="mb-3">
                      A page’s context is determined by the words surrounding
                      the image. So the image is more likely to rank in Google
                      Images when it appears on pages about its context.
                    </li>
                    <li className="mb-3">
                      For example, if you’re talking about cars, use a picture
                      of a car. If you’re talking about dogs, use a picture of a
                      dog. Don’t just slap an image onto your page and hope that
                      it will attract people—make sure it’s appropriate!
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Implement Structured Data
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      Structured data is a way to provide Google with more
                      information about your content. Google Images displays
                      your images as rich results when you use structured data
                      and even includes a prominent badge.{" "}
                    </li>
                    <li className="mb-3">
                      To add structured data to your images, we recommend using{" "}
                      <a href="#" className="text-blue-700">
                        Schema.org
                      </a>
                      , as all major search engines support it. Types of
                      structured data supported by Googe images are video,
                      recipe, and product.{" "}
                    </li>
                    <li className="mb-3">
                      Schema.org allows you to define the content of your image
                      in an organized way that is easily understood by crawlers
                      and search engines. So when someone searches for something
                      related to your image, they’ll see relevant results from
                      Google Images.
                    </li>
                    <li className="mb-3">
                      <strong> Note:</strong> To be eligible for rich results
                      and badges, please ensure to include the image attributes.
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Optimize for Speed
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      Google gives preference to optimized, fast-loading images.
                      In fact, page speed is one of the key determining factors
                      for Google’s algorithm. Optimize your image loading speeds
                      so you can win more traffic from regular search results
                      and image search alike. (
                      <a href="#" className="text-blue-700">
                        nexcess.net
                      </a>
                      ){" "}
                    </li>
                    <li className="mb-3">
                      The primary way to optimize images for speed is to make
                      sure they are formatted and compressed properly. You can
                      use tools like{" "}
                      <a href="#" className="text-blue-700">
                        ImageOptim
                      </a>{" "}
                      (for Mac users) and{" "}
                      <a href="#" className="text-blue-700">
                        TinyJPG
                      </a>{" "}
                      to help with optimizing your images. You might also want
                      to consider uploading your images in “progressive” format,
                      which can render faster.{" "}
                    </li>
                    <li className="mb-3">
                      Also, host your images where they’ll load as fast as
                      possible. Switch to a different hosting platform if your
                      current one is dragging you down. In addition, use{" "}
                      <a href="#" className="text-blue-700">
                        {" "}
                        content delivery networks (CDNs)
                      </a>{" "}
                      to speed up the delivery of images. CDN is helpful,
                      especially if you have visitors from around the world.
                    </li>
                    <li className="mb-3">
                      Run your site through a tool like Google’s{" "}
                      <a href="#" className="text-blue-700">
                        PageSpeed Insights
                      </a>{" "}
                      to test your pages for speed.
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Use Descriptive File Names
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      Basically, the filename of your images is a ranking
                      signal. Image filenames give Google clues about the
                      subject matter of the image.{" "}
                    </li>
                    <li className="mb-3">
                      A descriptive filename can also help Google determine
                      what’s in an image and might help it show up for a related
                      search query. Also, keep in mind that Keyword-rich
                      filenames are essential for image optimization.{" "}
                    </li>
                    <li className="mb-3">
                      By default, most image editing tools will save images with
                      generic names like IMG_0023. Well, the file name should
                      identify what the image is.
                    </li>
                    <li className="mb-3">
                      If you’re writing a post about winter vacation
                      destinations, don’t save the photo as IMG_0023.jpg when
                      the photo actually shows ski slopes in Aspen, Colorado.
                      Instead, use a descriptive file name like
                      ski-slopes-aspen-colorado.jpg.
                    </li>
                    <li className="mb-3">
                      Don’t worry about creating filenames that are too long or
                      “clunky.” Google can read long file names – so can your
                      visitors.
                    </li>
                    <li className="mb-3">
                      <strong>Note:</strong> Use hyphens to separate words
                      rather than underscores or spaces, or other characters in
                      the filename (e.g., skiing-in-the-rockies.jpg instead of
                      skiing_in_the_rockies.jpg or skiing in the rockies.jpg).
                      Hyphens are interpreted as separators between words by
                      search engines, whereas underscores and spaces aren’t
                      interpreted as word separators by search engines..
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Choose The Right File Format
                </h3>
                <p className="md:text-[21px]">
                  Understanding file formats for images can help you know the
                  best option for ranking your image in a Google search. BMP,
                  JPEG, PNG, GIF, WebP, and SVG are the supported formats for
                  Google images. (
                  <a href="#" className="text-blue-700">
                    developers.google.com
                  </a>
                  )
                </p>
                <p className="md:text-[21px]">
                  Choosing the right file format for your images can be tricky.
                  There are guidelines for web images, print images, and image
                  file formats.
                </p>
                <div className="my-[20px]">
                  <strong className="text-[21px]">Choose:</strong>
                  <div className="mt-[20px]">
                    <ul className="list-disc list-inside mb-[10px] text-blue-700 text-medium md:text-[20px]">
                      <li>
                        <a href="#">JPEGs for photographs</a>
                      </li>
                      <li>
                        <a href="#">PNGs for screenshots</a>
                      </li>
                      <li>
                        <a href="#">GIFs for infographics and icons</a>
                      </li>
                      <li>
                        <a href="#">BMPs for logos</a>
                      </li>
                      <li>
                        <a href="#">SVG for vector graphics</a>
                      </li>
                    </ul>
                  </div>

                  <p className="md:text-[21px]">
                    <strong>Note:</strong> WebP format is the most recommended
                    as it’s tailored for the web and offers superior lossless
                    and lossy compression.
                  </p>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Make Sure Your Image Is Working Across Devices
                </h3>
                <p className="md:text-[21px]">
                  Google’s focus on mobile-first indexing means it’s important
                  to make sure your images are working across all devices and
                  browsers. After all, mobile devices make up{" "}
                  <a href="#" className="text-blue-700">
                    {" "}
                    more than half of all Google searches.
                  </a>
                </p>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Put Your Images High Up On The Page
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      Try putting your most important image near the top of the
                      page. This can be especially helpful when using a
                      long-form article format or having a lot of content on one
                      page (like an e-commerce site).{" "}
                    </li>
                    <li className="mb-3">
                      This way, Google knows what’s most important right away
                      and can give it a priority when it comes to how they rank
                      your site.{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Add A Descriptive Caption
                </h3>
                <p className="md:text-[21px] mb-3">
                  When you’re trying to rank images in Google, one of the most
                  important things you can do is add a descriptive caption. The
                  caption is essentially the text that appears below each image
                  when it’s shared on social media or embedded in your website.
                  You can use this part of the image to help searchers
                  understand what they see and why they should click it
                </p>
                <p className="md:text-[21px] mb-3">
                  So how do you make sure that your image captions are as
                  descriptive as possible? Here are some tips:
                </p>
                <div>
                  <ul className="list-disc list-outside pl-5 mb-[10px] text-black text-medium md:text-[20px]">
                    <li className="mb-[10px]">
                      <strong>
                        Use keywords in the title tag for each individual post.
                        This will allow Google to understand your post and show
                        it in searches related to that keyword.
                      </strong>
                    </li>
                    <li className="mb-[10px]">
                      <strong>
                        Make sure that each image has an alt attribute with
                        descriptive text. This will allow search engines to find
                        and index images even when they can’t see them.
                      </strong>
                    </li>
                    <li className="mb-[10px]">
                      <strong>
                        Create a custom description field for each individual
                        post, if possible. If this isn’t available, make sure
                        that there is enough information about each picture so
                        that users can get an idea of what it shows at first
                        glance–even if they don’t read all of the text on the
                        page itself!
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Use Internal Linking on Your Images
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      Internal links are a key ranking factor for web pages, but
                      they’re also a great way to optimize your images. Search
                      engines can’t crawl images or the content in images as it
                      does with text. Search engines can only find content on
                      pages by crawling the anchor text of internal links to
                      those pages.{" "}
                    </li>
                    <li className="mb-3">
                      By manually linking images to other relevant pages of your
                      site, you’re sending that internal link juice and allowing
                      Google to understand what those images are about. Internal
                      linking should be done manually, meaning the links aren’t
                      inserted automatically by the CMS or server. This is so
                      that only relevant links are created, and spammy internal
                      linking isn’t done.{" "}
                    </li>
                    <li className="mb-3">
                      One common mistake people make is linking to images on
                      other sites instead of linking internally to their own
                      images. Linking to your own site (especially when it comes
                      to images) helps improve your site’s overall domain
                      authority, which in turn will help images rank better in
                      Google Image search. And yes, Google does take{" "}
                      <a href="#" className="text-blue-700">
                        domain authority
                      </a>{" "}
                      into account when ranking pages for Image search results.{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Use A Sitemap To Index All Images
                </h3>
                <p className="md:text-[21px]">
                  A sitemap is essentially a blueprint of your website. By
                  adding an image sitemap file, you’ll be able to tell Google
                  the locations of all of your images on your site instead of
                  only providing them with a list of URLs. This makes it easier
                  for Googlebot to crawl through your website and index
                  everything properly!
                </p>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  Add A Watermark To Secure Your Images
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      Adding a{" "}
                      <a href="#" className="text-blue-700">
                        {" "}
                        watermark
                      </a>{" "}
                      will help prevent people from stealing your images by
                      making them harder to copy or use without permission. This
                      means that if someone tries to use your image without your
                      permission and doesn’t want to pay you for it, they’ll
                      have a harder time getting away with it. This is because
                      there’s no way they can crop out the watermark.
                    </li>
                    <li className="mb-3">
                      Second, adding a watermark helps people recognize who
                      created the image and where it came from when they see it
                      on social media sites like Twitter or Facebook. This could
                      lead more people to visit your website or read more about
                      what you do!{" "}
                    </li>
                    <li className="mb-3">
                      Finally, if someone does decide to steal your image anyway
                      (despite having added a watermark), then at least you’ll
                      have proof that they stole from you. So that you can take
                      legal action against them if necessary (and hopefully get
                      compensated for their actions).{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mb-[40px]">
                <h3 className="text-[22px] font-extrabold leading-[30px]">
                  SafeSearch
                </h3>
                <div>
                  <ul className="md:text-[21px]">
                    <li className="mb-3">
                      When optimizing your image, one of the most important
                      things to keep in mind is that Google’s{" "}
                      <a href="#" className="text-blue-700">
                        {" "}
                        SafeSearch system
                      </a>{" "}
                      can block any explicit content from appearing on its
                      search engine results pages (SERPs). This means that if
                      you want to be found by people looking for adult content,
                      it’s important that those images don’t contain explicit
                      content.
                    </li>
                    <li className="mb-3">
                      It’s especially true if you’re trying to rank for keywords
                      related to adult content or nudity. You’ll need to make
                      sure that any images you use as part of these campaigns
                      don’t contain anything explicit (e.g., sexually suggestive
                      poses or nudity).
                    </li>
                    <li className="mb-3">
                      Google often uses SafeSearch to determine whether or not
                      images are appropriate for children or families.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" mb-[40px]">
              <h2 className="md:text-[28px] text-[22px] font-extrabold leading-[30px] mb-[20px]">
                Conclusion
              </h2>
              <div>
                <ul className="md:text-[21px]">
                  <li className="mb-3">
                    Congratulations! You’ve now learned the steps you need to
                    take in order to rank your images on Google.
                  </li>
                  <li className="mb-3">
                    <strong>Remember:</strong> Your SEO strategy shouldn’t be a
                    one-size-fits-all approach. It’s important to understand
                    what makes your audience unique, and what their needs are.
                    Once you have that information, it’s much easier to create
                    an image that will resonate with them and help you achieve
                    your goals.
                  </li>
                  <li className="mb-3">
                    If you’re looking for more tips and tricks on how to improve
                    your SEO, check out our other guides.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
