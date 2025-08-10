import React, { useState } from "react";
import StoryThumbnail from "./storyThumbnail";
import { containsFilter } from "~/helpers/filters";

export default function StoriesList({stories}:{stories:Story[]}){
    const [filter, setFilter]=useState('');
    return <div className="stories">
        <input type="text" value={filter} onChange={e=>setFilter(e.target.value)} placeholder="Search story by title" />
        {stories.filter(story=>containsFilter(story.title,filter)).map(story=><StoryThumbnail key={story.id} id={story.id} title={story.title} creator={story.creator}/>)}
    </div>
}