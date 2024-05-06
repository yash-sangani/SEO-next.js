import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { slug } from "github-slugger";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [view, setView] = useState(0);
  useEffect(() => {
    const incrementview = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (error) {
          console.error(
            "Error incrementing view count inside try block:",
            error
          );
        }
      } catch (error) {
        console.log(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };
    if (!noCount) {
        incrementview();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
       
let { data, error } = await supabase
.from('view')
.select('count')
.match({slug: slug})
.single()

        if (error) {
          console.error(
            "Error incrementing view count inside try block:",
            error
          );
        }
        setView(data ? data.count : 0)
      } catch (error) {
        console.log(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };
    
        getViews();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (showCount) {
    return <div>{view}</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
