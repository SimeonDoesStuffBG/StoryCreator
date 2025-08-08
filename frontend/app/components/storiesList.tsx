import React from "react";
import StoryThumbnail from "./storyThumbnail";

export default function StoriesList({stories}:{stories:Story[]}){
    return <div className="stories">
        {stories.map(story=><StoryThumbnail title={story.title} creator={story.creator}/>)}
    </div>
}