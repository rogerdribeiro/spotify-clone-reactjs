import React from "react";
import Slider from "rc-slider";
import Sound from "react-sound";

import { connect } from "react-redux";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";
import VolumeIcon from "../../assets/images/volume.svg";
import ShuffeIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}
    <Current>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUPDxAVFRAPEBAPFRUQFRUPDw8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGC0dHR0rLS0tLSstLS0tLS0tKy0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tKy0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAYFB//EADkQAAIBAgMFBgQFAwQDAAAAAAABAgMRBBIhBTFBUYEGEyJhcaEUUpGxMkLB0fAjcuEzYoLCFVOS/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAQABBAMBAQEBAAAAAAAAARECAxIhMRNBUWEycSL/2gAMAwEAAhEDEQA/APraQSQKDTNVJYmUJFiAcpMoaRA0F5COA0lg0FJF2DaKsMKRCEEaFlEALsQq5MwBdipEuQApEYMkDcYHYopMu4BREDJgZwBzAZWcmcAlgWiOoBKoMCsUB3hYwcpBpmWI6MiQcmGmKTCTEDEWAmGhEuxCFgEsVYtEAAaKaDYLGQSi7gjGowWW2C2B6ikGmLuVcDOuDIXmCzAFORTkXJCZIcAmwGC2RSKwtTUvOQoC0MplWDy3JkABylDLEDQqI2IuwSZKzYsNMTcJSERtwoyE5i1IMI/Pxe5FqorZrrLa976W33vyMG0KLqU5U1LLntFu1/A34klzauuoujgWsNLDOd7wqU4yta0JXUU15JpdAwnpzqJLM2lFK927JLnciqxy58yy2vmustud91jDiMLKph3RlKKlKGTNFPKuTSb5IlXZ0fhp4am7KcKsby8TUqjbcnz1k2LIPLepJ3SabTs7a2dr2fLRr6gqSd7NOzs7a2fJ8nqjJs/Bd06jUnJVakZrM5SkrU4Qs5NtvWHvbgZ9lbNlRlOUqmfvfHPw5f6125SXk7214RQ8g8vRkhMKiks0ZKS5xaa+qLxMHKEoxlllKMoqVs2VtWTs9/oYNjYCVCDpympRveKSayLldtuXDV/oOE3VKqiryaSXGTSS6srvItKWZZXazurO+is+NxG0MP3lKpSvbvKc4Xauk5RaTt1F43Cd5TVO9kp0pXV07QnGWltz8O/gPA1OorN3Vle7vorb7+guFVSV4tNc4tNfVGWjgctGdHNfO6zTd20qjk1e7u2s2/iHgaDp04wbu4q11ez/APptjwbT3UV0rq73c3bkUqyy5syy2ve6y253Me0sJ3sMqllkpKUZLVx0cZW9YuS6g47BqdJUYtRheCate9OP5Uui6XHg2t86qSu3ZLi9EV3id1fVb+a46nn1cG5YfuJSu8ig5NfiSa1a9EDgsL3Tn4nJTlFq++MVFRUW+Nrbwwtb2wcwDmC2PBp8ZlsTEYhWGJMK4u4SYjGQrMQQXKIAxoVJCi6LOWpiWikViWpSLzGeLCuLAdmJmFpkuGEeqgqOa1m9e9ct7d4Z81vppYG5WYMC6lOVqtpa1Pw62UfCktbaa3Y2lKySfBev6IVmI5BgLnTm4xSnaUabi3dtSm1Fa81o9d5pcnl0tmtpfde3HyE5i1IeErDU5RjlnLM034tU2t+q5710EKhO9TxaVFaOreV2ava2m/2NGcFyAM1enOUJK9pSknpJ+FeHRSt5PhxLqQm5wldWimpatJuz4W14ceA1yBcisImtTk4SjfVzunf8udSte2ml1bUdcFyBbHhCzFSYDZVx4NRstMpgjI6MhiZnTHQJsVDURyAuWyFJchVyAGlMly8oMjNotpCpRCuC2VCoGU5FtlNFJqKQaYlkzjxJ4ICmWGAdwWyiDCZisxTBYyGpFuQou4YS2ymyihhGyi7EsBKsCwimhgJQVi0AChsQIoYTTg0EkLTLzEqMsiCs5Yg2KqU2LRZnjYEkDcNgNFRNUymWXcpJbBY1xBcBylhdy1MJwByFbEiUwlIUy4Jt2QYZpO6b4fXQakormwJVOZlef4ucP0Dp23tdLgO3MOc0DZbw+Si8ImUvIC5BwnzHOf6V4fi1ArINsSxWpwnIC4mhipMNGFMFsuTAaLSly7g2DUQAooYogIsiqFlIAQRnhJilMNSIaDuRoG5VwCOINi8xTkVErRYpyJnHhaaC0LzlxkPC1bgMpq3qDJ6FQJqoqtUEOfIdWhfoZp6bmLwPK434lNtFRvx9jyavaCisT8Nq9crmvwxnro162V+bF9h7HfcA1LzOX7W7dVGEe6lCalKdOcU1dNb7Nbmv2M/ZrtVCpTUMRNKonbM9FKNt79Nb9CfA7vLtqNXg+g1yOF29tqLlSq4eTvFZuV0pNWa9U+jZ2uHqqcI1I7pxjNejVyuNLkNsBoNgSmaJA4Fd2SVQB1h+S8GqBG0jNLEiZ4gfbaO6NcqqM9TEGSdYzzrFzpovUbfiCHnd6QvsR8joIyGRZljUGxmc1jplaYhWEKQamTijMoEoBKZMwAmURckaWA4lTkmxlbCjIZOmKUS9lZ5hlSoXTloIxDsl6gxrJCsVp86ghy1EzxPMzvHa7ieyleWe2nHYtUqc6st1OEp6u17K6XXcfJtk7QTrXqVe7eaUlPKqn4lrGS49X7nT9vNtVYwVGGXuq1NqXz5r+u4+eKLWplb23yVunuq75VKVk78Vq7X06L6IODs9OZnixkXroZ2nHsUKnG/A+qdkK2bBUr8FOPSM5JHyGi9dT612WhlwdJc1KXSUm19y+l7XfT2ZMTNkcgGdEiKXJipSGSQqUS4ilTkJkx04iZo0iLC2LcQ5MVJls0yli7kGHtwQ2JnUg1I5a640oNJmeFQcqxF1cwxFoBVQlVQvJ+BEuV3hWcAK4JHMFzGmgxcLwdt61XQ4zaPaZU24whmto23ZdDtsxwPajZXdV++S/pVW7coVXvT9dWv8BdTWWfays92H9397CJdrMQtXQVvNtfoDOtGKvLcuOrt9Dw9q7RjKyhG/m29OehVuT2y26Pb+OniZqo6eVxhk0eZWu3e/U8+GDqONlCTfkr6CqWPnCWaE2nuf5k1yaeh6+H7R5o5ZxSe7NHRJem9dDl5S2614zj93B7P2NFxhVqydv6s5RjZvJSSSs3peUna1uZjxmzpUpKG9qMczV7Z98kudt3Q3UVukrSu75o83ZNrlolHySNNWpFXzcddddQbdsx5uzcPKrUhTivFUkoryv/L9D7LRpqEYwjuhFRXolZHKdjNjZH8VUXikstNPeovfN+b3Ly9Tq3M26fHJrLkIoBzAlUNcSYwWKdQB1B4NhkhE4kdUVKqVJU2wE4iZRGyqipVC5rOyBy+RCd4Qe0ZG9SYamaZWYPcrmc3fPt1Xo2ei1MJVA1hvMZHBeYd/EfFzKUy1Ma8EwJYbzDu40Xp859JnLziZRaKRXhn5PzFpiUw4gcNSZ5W29oUlSq05ShOcYeKm2pSjf8LlFO6WqdzfisWqNOVWb8NOLk+nA+JY/a1SdedfNaVWUpSXBpvSPot3QkcrONmhxe1KibjqvJNpf5MjxSf4or7P2NMoxqK/vxT5GCrRcXZ/4a8jDlLPJ6ZaL429dV9QO5fDW3Fai4xOt7HYbBVcsMTB95OdouU5KnOS1UWlaztuXGzDjNuJrwNnTrKahSjKUpfkinJy6L7n0bYXZj8NXFrVWapaSSf+9rR+i0OhwmCp0llo04wX+xKN/XmObN+PTn2XdfRjmC5i2wGzXEaa5gOYtyBch4WjcgJSAcgJSKwtFKQuUgXMXKY8To5SFykBKYuUx4WnZiGbvCDwu57CxASxBxvwGOv/AKiHLB47/wBkTHt4tvk5/ldgsSxkcY+ZxvwuP+eISwuP+eIdnFU6vU/K7NY18y/izivhtoL80SfD7Q+aIvj4n83U/K7T4gnfI4zutofNEGVHaHzIfZP1Py8vyu171EqYmMU5SaUYq7bdkkcBjcZi6CvWrRjfVLfJryR4O1ts1q0ck5vItcq0u+cv2FeEHz38b+2va2WIfcUG40IvV7nUkuL8uS+uui5Jyvr/ABMlRCoSs/JmXK5SlvLy04atldn+F7/3PWjh1JZZ7nua3pnhtGjC42yytu32FsntXGmVsI4ScZb/AOah4Gm3TqU3ydSLXzw1+1xsq1SSvPxRto1wXk0Fs+dmuTk4u+ujbv7EyTVe3U9mu3Kyxo4u91aPe701wc1w9Vc7aFZSSlFppq6ad01zTPhdSyk8jvG7s3o7cLrmenszbNWissJtQf5b3SfNX3GnDnL4qLbH2FzFymuZw2GnjK0FUp1E4vlwa3p+ZU8DjvnN+1n8n8dtKa5gOZxX/jsZxmw4YTGJWzFYnuv4691BUqhyrw+MtbMIlg8X8wFb/HWymIniF8y+pydbCYx/mMctk4q923f1Du/hY7Z1VzFyqrn7nI0tn4pfmYUtnYl75Mfd/Cx1PxC5r2KOU/8AFV/mZYd1/Cx9BzBKZkv5lpebMXbrdGYxSMcJDozFVytFyswrOC5sUFOcjxu023VhaOdWdSd4wi9zfFvyX7G9ylfyPm3bfFyqYpwk9KMYwSW678T+6XQOVyM686ti6lSTq1JuU5O7b+3klyESrviKuDJmXfZEdu0cpC2WykTbqpMVYuxAkhYevZ7P1s16T3rWPXeg6NOyb+WUl1cmvseZs6WWrF+dvqeve6l5ylflzNeN2f8AB9vCqK0mvNlB1X4pebYuRmHXdgtoNVZUG/DOOdJ/PHfb1V/ojtnM+S7JxPd16dThGpG/9t7S9mz6o5HT0uWxnymGSkA5AOQDkapG5C5MFyFuQ0jbFSZTkKlIZCcgJSAchcpDSbmIIzEAPXUw1IyqYamYOprjMNTMsZhZxLjV3hWcz5ynUAWnuZ8mx9fvKs6nz1Jz6Ntr2Pou1sU4UKk+Kpyt6tWXu0fNFu9jPq/UQFgsJotowpwIIcrAgaXDp7wUi8v84DhNMI6p3VrqXpZ6ns4aN4z/ALo+6aOfcfPke5s6olCeZpXjTtfjJ7vc04XyTxprV+rBmMxcf6kl536PVfcS0Z+jxVj6fszE56FOfzU439UrP3TPm0Z2Vmrrgmdp2Xm/ho3ldXkkrWyJNq3nz6m3R9o5PbcwXMS5guZ0szHMCUxbkLchpMlUAlMW5AOQyE5ASkDKQDkBGZiCMxYB6amGpmZu3FdHctTMXS1qYamY84SqAetfeAyqGbviOoEFrB2qrWwsl88oR983/U4ifI6ftZU8FOPOcpdUrfqcw1xMerfJQJb3FMnDf0MVqmSMuBTZJW4cuPMQEgmuPty87C0W2BjfM9jZlOMllkrp04tesXoeMtx6+x5ax1/JNdNP3NePuI+qx7Rhad+DivbT9DKb9qrVf8kYBcp5NR1nZKreg4/LUf0aT/c5JvQ6DsjV/wBSP9kvun+hXRv/AKTz9OncwXMU5AOSOtibKQtzFuQDkMjJSAlIW35gOQENyBcgHIFyDQZcgvo/oQND0EWiEMWw0UiEAxgohBwV4PardT9an/U52PH+cyEMOr/o+KpAshDJSEIQRriXL9iEADpno7J4f8v0IQ04+4n9VtLh/d+h573v1/VkIHP2cKPb7Kfin/avuQg+n/uJ5/5dEAyEOtgCYLIQABgyIQCCLIQDQhCCN//Z"
        alt="imagem"
      />

      <div>
        <span>Times like these</span>
        <small>Foo Fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffeIcon} alt="button" />
        </button>
        <button>
          <img src={BackwardIcon} alt="button" />
        </button>
        <button>
          <img src={PlayIcon} alt="button" />
        </button>
        <button>
          <img src={ForwardIcon} alt="button" />
        </button>
        <button>
          <img src={RepeatIcon} alt="button" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ed760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ diplay: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);
const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps)(Player);
