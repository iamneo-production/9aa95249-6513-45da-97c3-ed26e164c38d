import React from "react";
import './Content.css'
import { CenterFocusStrong } from "@mui/icons-material";


const Content = ({ searchTerm }) => {
  const contents = [
    {
      title: 'TodaysTopHits',
      Image: "https://routenote.com/blog/wp-content/uploads/2022/02/1.-Todays-Top-Hits.jpg"
    },
    {
      title: 'Sleep',
      Image: "https://pbs.twimg.com/media/Dr92-ABX4AARs2P.jpg"
    },
    {
      title: 'Mega Hit Mix',
      Image:"https://i.scdn.co/image/ab67706c0000da84679591faf5559606b578b25c"
    },

    {
      title: 'Latest Hits',
      Image: "data:image/jpeg;base64,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"
    },
    {
      title: 'Tunes',
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Y4FwXLSQqd70U5ujpLcRQjy6IGNzl3Co-g&usqp=CAU"
    },
    {
      title: 'Long Drive',
      Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ot5fxXEkJye48KEIcGpjMYlTT1LY74XcEN7nhwGaxmsaxX8tVcvl8z2W4YAzPSkWGoQ&usqp=CAU"
    },

   
  ];


  const filteredContents = contents.filter((content) =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="imagelist">
      {filteredContents.map((content, index) => (
          <div key={index}>
              {content.Image &&
                  <img src={content.Image} value={content.title} alt={content.title} />}
              <h5>{content.title}</h5></div>
      ))}
      </div>
    </div>
  );
};

export default Content;