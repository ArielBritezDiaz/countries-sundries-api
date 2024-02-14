import React, { useState, useEffect, useCallback } from 'react'
// import { useTranslation } from 'react-i18next';
import './PageCountries.css'
// import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';

import JsonView from '@uiw/react-json-view';
import JsonViewEditor from '@uiw/react-json-view/editor';
import { darkTheme } from '@uiw/react-json-view/dark';
import { nordTheme } from '@uiw/react-json-view/nord';
import { githubDarkTheme } from '@uiw/react-json-view/githubDark';
import { TriangleArrow } from '@uiw/react-json-view/triangle-arrow';
import { TriangleSolidArrow } from '@uiw/react-json-view/triangle-solid-arrow';

//Styles JSONView
import Arrow from '../../assets/stylesJson/jsonViewStyles.jsx';

function PageCountries() {
  const [ countries, setCountries ] = useState(null)

  const PORT = import.meta.env.VITE_PORT_SERVER;
  const HOST = import.meta.env.VITE_DB_HOST;
  const PROTOCOL = import.meta.env.VITE_PROTOCOL;

  const fetchData = async () => {
    try {
      const response = await fetch(`${PROTOCOL}://${HOST}:${PORT}/api/v1/country/argentina`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      })

      const result = await response.json()

      console.log("result:", result)
      setCountries(result)
    } catch(error) {
      console.log(error)
      console.log("error.message:", error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return(
    <div className="container__all-countries" >
      <h1 className="title__block" >All Countries</h1>
      {
        countries && (
          <div className="container__countries-info">

            <JsonView
              value={countries}
              displayDataTypes={false}
              displayObjectSize={true}
              style={githubDarkTheme}
              indentWidth={10}
              enableClipboard={false}
              quotes={'"'}
              collapsed={false}
              highlightUpdates={true}
              components={{
                arrow: <Arrow />
              }}
            >
              <JsonView.Arrow>
              <TriangleSolidArrow />
              </JsonView.Arrow>
            </JsonView>

            {/* <JsonView data={countries} theme={"monokai"} shouldExpandNode={allExpanded} style={darkStyles} /> */}

            {/* {
              Object.entries(countries).map(([key, value]) => (
                <div className="container__per-country" key={key}>
                  <p>
                    <span>{key}: </span>
                    { typeof value === 'object'
                      ? Object.entries(value).map(([innerKey, innerValue]) => (
                        <div key={innerKey}>
                          <strong>{innerKey}: </strong>{innerValue}
                        </div>
                      ))
                      : value
                    }
                  </p>
                </div>
              ))
            } */}
          </div>
        )
      }
    </div>
  )
}

export default PageCountries