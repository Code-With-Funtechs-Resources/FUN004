"use client"
import Text from "funuicss/ui/text/Text"
import Button from "funuicss/ui/button/Button"
import {PiList, PiPaperPlaneRight, PiPlus, PiX} from "react-icons/pi"
import { useEffect, useState } from "react";
import RowFlex from "funuicss/ui/specials/RowFlex"

import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'

import Input from 'funuicss/ui/input/Input'
import IconicInput from 'funuicss/ui/input/Iconic'

import Section from "funuicss/ui/specials/Section"

import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'

export default function Home() {
  const [sidebar_width, setsidebar_width] = useState("")
  const HandleSidebar = () => {
    if(sidebar_width == "" || sidebar_width == "0px"){
      setsidebar_width("200px")
    }else{
      setsidebar_width("0px")
    }
  }

  useEffect(() => {
    addEventListener("resize" , ()=> {
      if(screen.width > 1000){
        setsidebar_width("200px")
      }
    })
  }, [])
  
  const questions = [
    "What is JavaScript?" ,
    "What is programming?" ,
    "How do I start learning programming",
    "Who created Python?" ,
    "What is machine learning"
  ]

  const home_questions = [
    {
      "header" : "Make up a story" ,
      "body" : "about children playing in the garden"
  }
  , 
  {
    "header" : "Create a full " ,
    "body" : "course for my python journey"
},
{
  "header" : "Teach me" ,
  "body" : "JavaScript from scratch"
} ,
{
  "header" : "Recommend" ,
  "body" : "The best way to learn ML"
}
  ]
  return (
    <main>
      <div className="_sidebar dark50" style={{width:sidebar_width}}>
        <div className="relative fit">
          <div className="_sidebar_header ">
            <Button text="New Chat" bg="primary" fullWidth bold startIcon={<PiPlus />}/>
          </div>
          <div className="_sidebar_content ">
            <List gap={0.5}> 
              {
                questions && 
                questions.map(doc => (
                  <ListItem key={doc} funcss="pointer">
                    <Text text={`${doc.slice(0, 18)}...`} size="minified" />
                  </ListItem>
                ))
              }

            </List>
          </div>
          <div className="_sidebar_footer dark100">
            <RowFlex gap={0.5}>
              <img src="/profile.jpg" className="width-40 height-40 circle"/>
              <div>
                <Text text="Jane Deo"/>
              </div>
            </RowFlex>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="_content dark">
        <div className="container text-right padding-top-20 _sidebar_trigger">
          {
            sidebar_width == "" || sidebar_width == "0px" ?
            <PiList size={30} className="pointer" onClick={HandleSidebar}/>
            : <PiX size={30} onClick={HandleSidebar} className="pointer"/>
          }
        </div>

        <div className="container padding-top-40">
          <div className="text-center">
            <Text text="Hi👋" heading="h1" block />
            <Text text="How can I help you?" />
          </div>
          <Section gap={3}/>
          <Grid>
            {
              home_questions && 
              home_questions.map(doc => (
                <Col sm={12} md={6} lg={6} funcss="padding">
                  <div className="border padding hover-up roundEdgeSmall">
                    <RowFlex justify="space-between" gap={0.5}>
                      <div>
                        <Text text={doc.header} bold size="minified" block/>
                        <Text text={doc.body}  size="minified"/>
                      </div>
                      <div className="height-30 width-30 dark50 roundEdgeSmall central pointer">
                         <PiPaperPlaneRight />
                     </div>
                    </RowFlex>
                  </div>
                </Col>
              ))
            }
          </Grid>
        </div>

        <div className="_search_wrapper ">
          <div className="container">
       <IconicInput 
       funcss="full-width" 
       rightIcon={<div className="height-30 width-30 dark roundEdgeSmall central pointer"> <PiPaperPlaneRight /> </div>}
       input={<Input type="text" fullWidth bordered funcss="dark50 text-dark900"/>}
       />
      <div className="text-center hide-small">
       <Section gap={1}/>
      <Text
       text="ChatGPT can make mistakes, Consider checking important information"
       color="dark600"
       bold 
       size="minified"
        />
      </div>
          </div>
        </div>

      </div>

    </main>
  );
}
