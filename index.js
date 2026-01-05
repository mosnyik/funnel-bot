const { Markup, Telegraf } = require("telegraf");
require("dotenv").config();

if (!process.env.BOT_TOKEN) throw new Error("Bot Token not provided");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("chat_join_request", async (ctx) => {
  // get the chatId of the caller
  userId = ctx.chatJoinRequest.from.id;

  // 2. Approve the join request
  await ctx.approveChatJoinRequest(userId);

  // 3. welcome the user and give them button to redirect them
  await bot.telegram.sendMessage(
    userId,
    "Welcome to my funnel, click button and let me get some money",
    Markup.inlineKeyboard([
      Markup.button.url("Continue", "https://t.me/another_bot_or_chat"),
    ])
  );
});

bot.launch();
