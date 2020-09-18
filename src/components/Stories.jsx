import React from 'react'
import './Stories.scss'
import Story from './Story'

export default function Stories() {
  return (
    <div className='stories'>
      <Story
        image='https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80'
        profileImage='https://www.invent.org/sites/default/files/styles/inductee_detail_media/public/inductees/2019-02/Ritchie%2C-Dennis_b%26w.jpg?h=157d851b&itok=HAZRfT8c'
        title='Dennis Ritchie'
      />
      <Story
        image='https://images.unsplash.com/photo-1516540438350-9db0f4e6552f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        profileImage='https://pbs.twimg.com/profile_images/1260284660120080384/FnKkVEK0_400x400.jpg'
        title='Feynman'
      />
      <Story
        image='https://images.unsplash.com/photo-1460501501851-d5946a18e552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        profileImage='https://www.onthisday.com/images/people/erwin-schrodinger-medium.jpg'
        title='Schrödinger'
      />
      <Story
        image='https://images.unsplash.com/photo-1534377370637-aced1ea12a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=683&q=80'
        profileImage='https://www.biography.com/.image/t_share/MTY2Njc5MTIyNzY2OTk2NTM1/nikola_tesla_napoleon-sarony-public-domain-via-wikimedia-commons.jpg'
        title='Nikola Tesla'
      />
      <Story
        image='https://images.unsplash.com/photo-1524275804141-5e9f2bc5a71d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        profileImage='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/SKorolow.jpg/220px-SKorolow.jpg'
        title='Sergei Korolev'
      />
    </div>
  )
}
