import * as React from "react"

const DeckItem = ({
                      content: {
                          text,
                          location: {
                              lat,
                              lon
                          },
                          image: {
                              file: {
                                  url,
                                  fileName,
                                  contentType,
                              }
                          }
                      }
                  }) => (
    <div>
        <p>
            {text}
        </p>
        Мы тут <br/>
        {lat}, {lon}
        <img src={url}/>
    </div>
)

export default DeckItem