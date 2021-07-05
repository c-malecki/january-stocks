import React from "react";
import chart from "../../assets/images/6mo.png";

export const Hypothesis = () => {
  return (
    <div className="hypothesis">
      <h2>My Hypothesis</h2>
      <p>
        Until very recently, each of these stocks showed a consistent statistical correlation in
        their movements relative to each other (observable in the chart below). There have been some
        intra-day breaks lately for some of these stocks, but they still seem to settle into some
        form of correlation. For example, AMC broke the trend at the end of May and for the first
        couple days of June, running up to as high as $70 while none of these others had relative
        gains anywhere near as great for the time period. Since then, AMC has appeared to settle
        back into a correlation with GME, but at a higher floor than previously. EXPR also recently
        had a bit of a breakout movement, though no where near as dramatic as AMC. Shortly after,
        BBBY had a jump as well.
      </p>
      <p>
        I make note of this because the past month shows some variance in correlation in small
        spikes for individual stocks, but the purpose of this data and the resulting theories center
        mostly around what happened leading up to the January 27, 2021 "squeeze" event.
      </p>
      <div className="img-container">
        <img alt="six month chart as of 7/4/2021" src={chart} />
        <span>6 month chart. 1/21/2021-7/2/2021</span>
      </div>
      Things I noticed from end of Q2 2020 (6/30/2020) to the 1/27/2020 peak
      <ul>
        <li>KOSS had the highest % gains. (8812.59%)</li>
        <li>GME was the 2nd highest, not far behind KOSS. (8325.72%)</li>
        <li>EXPR was 3rd, but by a wide margin compared to KOSS and GME. (773.13%)</li>
        <li>BB was 4th (487.14%)</li>
        <li>BBBY was 5th (374.89%)</li>
        <li>AMC was 6th (356.42%)</li>
        <li>NAKD was 7th (123.88%)</li>
        <li>NOK was 8th (122.00%)</li>
      </ul>
      <p>
        What I want to understand is why each stock reached its respective peak compared to another.
      </p>
      <p>
        I see there being a several main variables at play that also influence each other and the
        observable trends. It's a bit complex and abstract, especially while my research is very
        shallow so far.
      </p>
      <ul>
        <li>Institutional and Insider ownership of Stock</li>
        <li>Size of Float</li>
        <li>Amount of ETFs containing the stock (or sources for shorting in general)</li>
        <li>Retail Sentiment</li>
        <li>Risk Model</li>
      </ul>
      <p>
        I lay out a super basic idea of a risk model for weighting algorithmic operations in{" "}
        <a
          href="https://www.reddit.com/r/Superstonk/comments/o9swj4/new_possible_education_who_dis_how_i_came_to_my/"
          target="_blank"
          rel="noopener noreferrer"
        >
          my second post.
        </a>
      </p>
      <ul>
        <li>
          How likely it appeared the company could or would go bankrupt. The worse shape the company
          is in, the more this decreases risk to short the stock since it "makes sense" the value is
          decreasing.
        </li>
        <li>
          Who owns the majority of the shares. More ownership increases risk because downward
          pressure is more noitceable to those who own the a large % of shares and aren't the ones
          selling it. Higher Institutional ownership would be more risky than insider ownership.
          Institutions would have a better idea of why the stock is moving than the insiders due to
          market technicals. So more ownership = more risk, but insider ownership = less risk than
          institutional ownership.
        </li>
        <li>
          Retail ownership is typically a revolving door and their behavior is fairly predictable.
          Retail is less likely to hold onto a stock when it's losing value. So the larger the
          float, the more trades in the hands of retail. It's easier to get away with shorting since
          retail would likely just sell out of fear without really knowing or caring why the stock
          is losing value.
        </li>
      </ul>
      <p>
        So if a good target is identified and assessed, the next step would be identifying sources
        available to short it with. The more sources, the more potential shorting. How much to short
        it would be determined by the overall assessment and risk model result.
      </p>
      <p>
        So the Hypothesis is there is a way to reverse engineer a model of sorts from the data that
        can create a projection of how much each of these stocks could have been shorted, what the
        magnitude of effect would be, and how the main variables determine the differences between
        each stock's observable trends so far.
      </p>
    </div>
  );
};
