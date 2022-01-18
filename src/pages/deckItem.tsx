import * as React from "react"

const DeckItem = ({
                      content: {
                          id,
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
    <div key={id}>
        <p>
            {text}
        </p>
        Мы тут <br/>
        {lat}, {lon}
        <img src={url}/>
    </div>
)

export default DeckItem