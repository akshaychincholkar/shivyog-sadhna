
import React, { useState } from "react";
import { Box, Tabs, Tab, Card, CardContent, Typography, Button, Stack } from "@mui/material";

const tabData = [
  {
    id: 1,
    title: "Organized",
    cards: [
      { id: 1, text: "1. I always do everything I need to do, when I need to do it. " },
      { id: 1, text: "2. I never argue or let my emotions work against me. " },
      { id: 1, text: "3. I have a good memory. I easily and automatically remember any name or anything that is important to me. " },
      { id: 1, text: "4. I eat only what I should. " },
      { id: 1, text: "5. I am a good listener. I hear everything that is said. I am attentive, interested, and aware of everything that is going on around me. " },
      { id: 1, text: "6. I have the courage to state my opinions. I take responsibility for myself and everything I say and do." },
      { id: 7, text: "7. I never spend more than I earn. I am financially responsible, both for my present and for my future." },
      { id: 8, text: "8. I set goals and I follow them. I set my sights, take the appropriate action, and achieve my goals." },
      { id: 9, text: "9. I spend time with my family and my loved ones. I enjoy sharing their lives with mine and my life with theirs." },
    ],
  },
  {
    id: 2,
    title: "Motivational",
    cards: [
      { id: 1, text: "1. I can do anything I believe I can do. I’ve got it and every day I get more of it. I have talent, skills, and ability" },
      { id: 2, text: "2. I set goals and I reach them. I know what I want out of life. I go after it and I get it. " },
      { id: 3, text: "3. People like me, and I feel good about myself. I have a sense of pride in whoa am and I believe in myself. Nothing seems to stop me. I have a lot of determination. " },
      { id: 4, text: "4. I turn problems into advantages. I find possibilities in things that other people never give a chance."},
      { id: 5, text: "5. I have a lot of energy––I am very alive. I enjoy life and I can tell it and so can others"},
      { id: 6, text: "6. I keep myself up, looking ahead, and liking it. I know that I can accomplish anything I choose, and I refuse to let anything negative hold me back or stand in my way. I am not afraid of anything or anyone. I have strength, power, conviction, and confidence. "},
      { id: 7, text: "7. I like challenges and I meet them head on, face to face––today especially. I am on top of the world and I’m going for it. "},
      { id: 8, text: "8. I have a clear picture in my mind of what I want. I can see it in front of me. "},
      { id: 9, text: "9. I know what I want and I know how to get it. I know that it’s all up to me and I know I can do it. Roadblocks don’t bother me. They just mean that I am alive and running, and I’m not going to stand still for anything. "},
      { id: 10, text: "10. I trust myself I’ve got what it takes––plenty of it––and I know how to use it. "},
      { id: 11, text: "11. Today, more than ever. Today I am unstoppable. I’ve got myself together and I’m getting more together every day. And today––look out world, here I come. "},
      { id: 12, text: "12. Limitations? I don’t even recognize them as limitations. There is no challenge I can’t conquer; there is no wall I can’t climb over. "},
      { id: 13, text: "13. There is no problem I can’t defeat or turn around and make it work for me. I stand tall. I am honest and sincere. I like to deal with people and they like me. "},
      { id: 14, text: "14. I think well; I think clearly. I am organized; I am in control of myself, and everything about me. I call my shots and no one has to call them for me. I never blame anyone else for the circumstances of my life. "},
      { id: 15, text: "15. I accept my failings and move past them as easily as I accept the rewards for my victories. I never demand perfection of myself, but I expect the very best of what I have to give––and that’s what I get. I never give myself excuses. "},
      { id: 16, text: "16. I get things done on time and in the right way. Today I have the inner strength to do more than ever. I am an exceptional human being. "},
      { id: 17, text: "17. My goals and my incredible belief in myself turn my goals into reality. I have the power to live my dreams."},
      { id: 18, text: "18.  I believe in them like I believe in myself. And that belief is so strong that there is nothing that diminishes my undefeatable spirit. "},
    ],
  },

  {
    id: 3,
    title: "Organized planning",
    cards: [
      { id: 1, text: "1. I am organized and in control of my life. I am in control of myself, my thoughts, my time, my actions, and my future. " },
      { id: 2, text: "2. I know what to do and when to do it, and I do everything I need to do, when I need to do it. " },
      { id: 3, text: "3. I program my mind to make the maximum use of my time. I am in control of my time and how to use it. I like being organized, efficient, and on top of things." },
      { id: 4, text: "4. Controlling my time keeps me that way. " },
      { id: 5, text: "5. I never waste time––I always “plan” time. And because I plan my time, I always have time to do the things I choose to do. " },
      { id: 6, text: "6. Each day I become more organized and in control of all areas of my life––at home, at work, in my mind and in my thoughts, in everything that I do. " },
      { id: 7, text: "7. I am very well organized. Each night I make a list of things I need to do the next day. I set my priorities and I follow them. " },
      { id: 8, text: "8. I am always on time. I am always right where I need to be, exactly when I need to be there. " },
      { id: 9, text: "9. Being on time is easy for me and the more I control my time and the more organized I become, the easier it is. " },
      { id: 10, text: "10. I am in control of my feelings, my emotions, my attitudes, and my needs. I control them; they do not control me. " },
      { id: 11, text: "11. I have the winning vote in the outcome of my own actions. And I choose to live my life by choice, not chance. Therefore, I take the time to take control." },
      { id: 12, text: "12. I have an organized and orderly mind. Because I think in an organized way, I conduct my life in an organized manner. " },
      { id: 13, text: "13. I think in the most positive and productive way at all times and in all things. The way I think is the way I live––and I think “right.” " },
      { id: 14, text: "14. I am the director of my destiny. I know where I am going and I know why I am going there. My earthly life is in my hands and in my control. " },
      { id: 15, text: "15. I control my goals and the achievement of my goals. I organize my goals by writing each of them down, along with the steps I need to reach them. One of the reasons for my success is that my goals are clearly defined and organized." },
      { id: 16, text: "16. I am in complete control of what I think and how I think. Therefore, I choose to think only those thoughts which help me and which are of genuine benefit to me." },
    ],
  },
  {
    id: 4,
    title: "Solving Problems",
    cards: [
      { id: 1, text: "1. I’m good at solving problems. I like challenges and I meet them head on. " },
      { id: 1, text: "2. Problems are my teachers. They help me to learn and grow. Without them, I would be going nowhere. With them, I am moving forward in the direction of my own goals. " },
      { id: 1, text: "3. There is no problem which I cannot conquer. I am strong in mind, body, and spirit. My will, my strength, and my determination are always greater than any problem I face." },
      { id: 1, text: "4. When I meet a new problem, I do not see the problem as my enemy. I know that finding the solution to the problem will move me forward in my own personal growth." },
      { id: 1, text: "5. Because I know that problems are a key ingredient in my spiritual and mental education and preparation, I recognize that all problems are important to me. " },
      { id: 1, text: "6. I do not fear problems, I solve them. I do not ignore problems, I confront them. I do not avoid problems, I conquer them. " },
      { id: 1, text: "7. I know that every problem holds within itself the keys to its own solution. Therefore, the better I understand the problem, the clearer I am able to see its solution. " },
      { id: 8, text: "8. Having problems is not a problem for me. I am confident, self-assured, positive, and determined. I always know that I am going to overcome any problem I encounter––and I always do. " },
      { id: 9, text: "9. I am good at breaking large obstacles down into smaller pieces that are easier to handle. And I never make any problem appear to be larger than it actually is. " },
      { id: 1, text: "10. I never worry. I turn “worry time” into positive, constructive, “solution time.” I keep my mind alert and open to all solutions—and solutions come quickly and easily to me. " },
      { id: 1, text: "11. I have learned to recognize that many problems carry with them benefits and potential opportunities which would not have presented themselves had the problem not occurred in the first place. " },
      { id: 1, text: "12. I do not seek to live a life which is free from all problems. Instead, I choose to live a life of finding solutions and enjoying the benefits which those solutions create." },
      { id: 1, text: "13. Challenge, conquer, solution, and win are words which I live by daily. Challenges are opportunities. Conquering them is the inevitable outcome. " },
      { id: 1, text: "14. “Solutions” are the stepping stones to my success, and “Winning” is my way of life." },
    ],
  },
  {
    id: 5,
    title: "Self Esteem",
    cards: [
      { id: 1, text: "1. I really am very special. I like who I am and I feel good about myself. " },
      { id: 2, text: "2. Although I always work to improve myself and I get better every day, I like who I am today. And tomorrow, when I’m even better, I’ll like myself then, too. " },
      { id: 3, text: "3. It’s true that there really is no one else like me in the entire world. There never was another me before, and there will never be another me again. " },
      { id: 4, text: "4. I am unique––from the top of my head to the bottom of my feet. In some ways I may look and act and sound like some others––but I am not them. I am me." },
      { id: 5, text: "5. I wanted to be somebody––and now I know I am I would rather be me than anyone else in the world. " },
      { id: 6, text: "6. I like how I feel and I like how I think and I like how I do things. I approve of me and I approve of who I am." },
      { id: 7, text: "7. I have many beautiful qualities about me. I have talents and skills and abilities. I even have talents that I don’t even know about yet. And I am discovering new talents inside myself all the time. " },
      { id: 8, text: "8. I am positive. I am confident. I radiate good things. If you look closely, you can even see a glow around me." },
      { id: 9, text: "9. I am full of life. I like life and I’m glad to be alive. I am a very special person, living at a very special time. " },
      { id: 10, text: "10. I am intelligent. My mind is quick and alert and clever and fun. I think good thoughts, and my mind makes things work right for me. " },
      { id: 11, text: "11. I have a lot of energy and enthusiasm and vitality. I am exciting and I really enjoy being me. " },
      { id: 12, text: "12. I like to be around other people and other people like to be around me. People like to hear what I have to say and know what I have to think. " },
      { id: 13, text: "13. I smile a lot. I am happy on the inside and I am happy on the outside. " },
      { id: 14, text: "14. I am interested in many things. I appreciate all the blessings I have, and the things that I learn, and all the things I will learn today and tomorrow and forever––just as long as I am. " },
      { id: 15, text: "15. I am warm, sincere, honest, and genuine. I am all of these things and more. And all of these things are me. I like who I am, and I’m glad to be me." },
    ],
  },
  {
    id: 6,
    title: "Self-Responsibility",
    cards: [
      { id: 1, text: "1. I take full responsibility for everything about me––even the thoughts that I think. I am in control of the vast resources of my own mind." },
      { id: 1, text: "2. I alone am responsible for what I do and what I tell myself about me. No one can share this responsibility with me. " },
      { id: 1, text: "3. I also allow others to accept their responsibilities far themselves and I do not try to accept their responsibilities for them. " },
      { id: 1, text: "4. I enjoy being responsible. It puts me in charge of being me––and that’s a challenge I enjoy. " },
      { id: 1, text: "5. I allow no one else, at any time, to assume control or responsibility over my life or over anything that I do. My responsibility to others is an extension of my own responsibility to myself. " },
      { id: 1, text: "6. I choose to leave nothing about me up to chance. When it comes to me––and anything in my life––I choose to CHOOSE. " },
      { id: 7, text: "7. My choices are mine alone to make for myself. I do not, at any time, allow anyone else to make my choices for me. And I accept full responsibility for every choice and decision I make. " },
      { id: 8, text: "8. I always meet all of the obligations which I accept. And I accept no obligations which I will not meet. " },
      { id: 9, text: "9. I am trustworthy. I can be counted on. I have accepted winning responsibility for myself––and I always live up to the responsibilities I accept. " },
      { id: 1, text: "10. There is no they on whom I lay the blame, or with whom I share my own personal responsibilities. I have learned the great secret of mastering my own destiny. I have learned that “they” is “me.” " },
      { id: 1, text: "11. I have no need to make excuses and no one needs to carry my responsibility for me. I gladly carry my own weight––and I carry it well. " },
      { id: 1, text: "12. Each day I acknowledge and accept the responsibility––not only for my own actions––but also for my emotions, my thoughts, and my attitude. " },
      { id: 1, text: "13. I accept the responsibility for living my life in a way which creates my strengths, my happiness, my positive, healthy beliefs, and for my past, my present, and my future." },
    ],
  },
  {
    id: 7,
    title: "Freedom from worry",
    cards: [
      { id: 1, text: "1. I never worry. Instead of worrying, I find solutions and I act on them. " },
      { id: 2, text: "2. My mind is constantly in tune with the positive. It is bright, cheerful, enthusiastic, and full of good, positive thoughts and ideas. " },
      { id: 3, text: "3. I am able to relax easily and comfortably in my body and in my mind. I am calm, confident, and self-assured. " },
      { id: 4, text: "4. My mind is orderly and well-organized. I consciously choose what I think and I always choose those thoughts which are the most positive and beneficial for me. " },
      { id: 5, text: "5. All of my thoughts create healthiness within me. My mind dwells only on those thoughts which create more harmony, balance, and well-being within me and in the world around me. " },
      { id: 6, text: "6. I automatically, and always, think in a decisive and determined way. " },
      { id: 7, text: "7. I am full of resolution and the absolute assurance of the best possible outcome in everything that I do. " },
      { id: 8, text: "8. I choose to look at the world around me in the bright, healthy light of optimism and self-assurance. " },
      { id: 9, text: "9. I do only those things which are best for me. I create the best within myself, I attract the best in others, and I find the best in the world around me. " },
      { id: 10, text: "10. I willingly, and without fail, take care of the duties and obligations which I have accepted for myself." },
      { id: 11, text: "11. I commit only to those responsibilities which I know I can fulfill. " },
      { id: 12, text: "12. I focus the attention of my mind only on those things that I can do something about. If I cannot affect it or direct it––I accept it. " },
      { id: 13, text: "13. I keep my mind too busy thinking good, healthy, positive, constructive, and productive thoughts to ever have any time for worry. " },
      { id: 14, text: "14. I control the thoughts I choose. No thought, at any time, can dwell in my mind without my approval or permission. I never worry." },
    ],
  },
  {
    id: 8,
    title: "Eating Habits",
    cards: [
      { id: 1, text: "1. I am in control of myself in every way––at all times and in all situations. " },
      { id: 2, text: "2. Each time I sit down to eat I reaffirm my determination to achieve my goal. By eating right, and never giving in, I am reaching the weight I want. " },
      { id: 3, text: "3. Whether eating in or eating out, I really enjoy eating less. " },
      { id: 4, text: "4. I never feel the need to finish the food in front of me. I eat only what I should––and never one bite more. "},
      { id: 5, text: "5. One way to weight-loss that’s easy and works, is less food on my plate, and less on my fork. "},
      { id: 6, text: "6. By ordering less when I eat out, and by serving myself smaller portions at home, I keep myself aware of the importance of staying with my goal––each and every day. “Less on my plate means less on my waist.\""},
      { id: 7, text: "7. When I sit down to eat, at no time do I allow anyone else to influence, tempt, or discourage me in any negative way."},
      { id: 8, text: "8. What I eat, and the goals I reach, are up to me. And I give no one the right to hinder or control my success."},
      { id: 9, text: "9. Although others may benefit from my success, I. am achieving my weight-loss goals for my own personal reasons––for myself, my life, my future, and my own personal well-being."},
      { id: 10, text: "10. I am never, at any time, tempted to take one bite more than I should. I am strong, I am capable of reaching my goal, and I am doing it."},
      { id: 11, text: "11. Being in situations which put a lot of food in front of me is not a problem to me now. I simply say “No” to the food and “Yes” to my success."},
      { id: 12, text: "12. I enjoy sitting down to eat. Each time I do I conquer my past, and I create a trimmer, happier, more self-confident future in front of me. "},
      { id: 13, text: "13. When I sit down to eat, I do not need someone else to remind me of my goal, or to keep me from eating something I should not. I take full responsibility for myself, and no one else has to do it for me. "},
      { id: 14, text: "14. Controlling my weight, and my appetite, is easy for me now. I enjoy smaller portions, smaller bites, and a slower, healthier, more relaxed way of eating. "},
      { id: 15, text: "15. I have set my goal and I am staying with it. I have turned mealtime into “achievement time.”"},
    ],
  },
];

function CardNavigator() {
  const [currentTab, setCurrentTab] = useState(0); // Active tab index
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Active card index within the tab

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
    setCurrentCardIndex(0); // Reset card index when switching tabs
  };

  const handleNext = () => {
    const maxIndex = tabData[currentTab].cards.length - 1;
    if (currentCardIndex < maxIndex) setCurrentCardIndex(currentCardIndex + 1);
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) setCurrentCardIndex(currentCardIndex - 1);
  };

  const currentCard = tabData[currentTab].cards[currentCardIndex];

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* Tabs */}
      <Tabs value={currentTab} onChange={handleTabChange} centered
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable tabs example"
                sx={{
                  "& .MuiTabs-scrollButtons": {
                    display: "flex",
                  },
                }}>
        {tabData.map((tab) => (
          <Tab key={tab.id} label={tab.title} />
        ))}
      </Tabs>

      {/* Card Display */}
      <Box sx={{ mt: 3 }}>
        <Card variant="scrollable">
          <CardContent>
           {/* // <Typography variant="h5" component="div"> */}
            <Typography variant="h5"  align="center" sx={{ wordWrap: "break-word" }}>
              {currentCard.text}
            </Typography>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentCardIndex === tabData[currentTab].cards.length - 1}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default CardNavigator;
