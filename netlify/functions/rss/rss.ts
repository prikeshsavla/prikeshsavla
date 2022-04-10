import { Handler } from "@netlify/functions";
import fetch from "node-fetch";
import xml2js from "xml2js-es6-promise";

interface FeedResponse {
  title: string;
  description: string;
  link: string;
  pubDate: Date;
}

export const handler: Handler = async () => {
  const data = (
    await Promise.all([
      getData("https://openpullrequest.substack.com/feed", 3, false),
      getData("https://blog.prikeshsavla.com/rss.xml", 3, true),
    ])
  )
    .reduce((acc, val) => acc.concat(val), [])
    .sort(
      (feedItemA, feedItemB) =>
        feedItemB.pubDate.getTime() - feedItemA.pubDate.getTime()
    );

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

async function getData(
  url: string,
  limit: number,
  skipDescription: boolean
): Promise<FeedResponse[]> {
  return fetch(url).then((response) =>
    response.text().then((xml) =>
      xml2js(xml).then((data) => {
        return data.rss.channel[0].item
          .slice(0, limit)
          .map(({ title, description, link, pubDate }) => {
            console.log(link, pubDate);
            pubDate = new Date(pubDate);
            description = skipDescription
              ? ""
              : description.join("").slice(0, 150);
            return {
              title,
              description: description,
              link,
              pubDate,
            };
          });
      })
    )
  );
}
