import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await fetch(
      "https://stablediffusionapi.com/api/v3/text2img",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({
          key: "MvacquO8yYysljF05xxdW3WvRQVI8Ah7abvbFVcljYaFFN1X9bAdQDAf2v3L",
          prompt: prompt,
          negative_prompt: "",
          width: "512",
          height: "512",
          samples: "1",
          num_inference_steps: "20",
          safety_checker: "no",
          enhance_prompt: "yes",
          seed: null,
          guidance_scale: 7.5,
          webhook: null,
          track_id: null,
        }),
      }
    );
    const image = response.output;
    console.log("response", response ,prompt);

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
