import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    }
  } = useStaticQuery(
    graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }`
  )
  return (
  <div className="Profile-wrapper">
    <Avatar />
    <h1>{title}</h1>
    <h2>{description}</h2>
    <p>{author}</p>
  </div>
  )
}
 
export default Profile;