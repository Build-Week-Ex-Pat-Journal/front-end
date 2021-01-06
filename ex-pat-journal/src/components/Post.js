import React, { useState } from "react";
import styled from "styled-components";

const initialIsEditing = false;

function Post(props) {
  const [isEditing, setIsEditing] = useState(initialIsEditing);
  const { post, id } = props;

  const PostWrapper = styled.div`
    border: 2px solid black;
    box-shadow: 5px 10px #888888;
    margin: 5% auto;
    width: 30%;
    border-radius: 10px;
    @media (max-width: 1800px) {
      margin: 5% auto;
      width: 40%;
    }
    @media (max-width: 1300px) {
      margin: 5% auto;
      width: 80%;
    }
  `;
  const ImgWrapper = styled.div`
    width: 90%;
    text-align: center;
    margin: 2% auto;
  `;
  const TextContentWrapper = styled.div`
    padding-right: 5%;
    padding-left: 5%;
  `;

  return isEditing ? (
    <p>A Post Form</p>
  ) : (
    <PostWrapper key={id} className="post-card">
      <ImgWrapper>
        <img src={post.image} alt="uploaded" style={{ maxWidth: "100%" }} />
      </ImgWrapper>
      <TextContentWrapper>
        <h4>{post.user_id}</h4>
        <p>{post.story}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat
          velit scelerisque in dictum non consectetur a. Eget lorem dolor sed
          viverra ipsum nunc. Tortor consequat id porta nibh venenatis cras sed
          felis eget. Cursus in hac habitasse platea dictumst. Mi tempus
          imperdiet nulla malesuada pellentesque. Pellentesque elit ullamcorper
          dignissim cras tincidunt lobortis feugiat vivamus at. Elit duis
          tristique sollicitudin nibh sit. Blandit volutpat maecenas volutpat
          blandit aliquam etiam erat velit scelerisque. Bibendum est ultricies
          integer quis. Orci eu lobortis elementum nibh tellus molestie nunc
          non. Facilisis sed odio morbi quis. Nunc sed augue lacus viverra vitae
          congue. Felis donec et odio pellentesque diam. Nunc congue nisi vitae
          suscipit tellus mauris a diam maecenas. Nunc mi ipsum faucibus vitae
          aliquet nec. In aliquam sem fringilla ut. Velit euismod in
          pellentesque massa. Bibendum est ultricies integer quis. Risus viverra
          adipiscing at in. Fringilla est ullamcorper eget nulla facilisi etiam.
          Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Iaculis
          urna id volutpat lacus laoreet non. Tellus id interdum velit laoreet
          id donec ultrices. Turpis tincidunt id aliquet risus feugiat in ante.
          Tincidunt tortor aliquam nulla facilisi. Lectus arcu bibendum at
          varius vel pharetra vel. Tellus elementum sagittis vitae et leo.
          Egestas integer eget aliquet nibh praesent tristique magna sit amet.
          Adipiscing at in tellus integer. In ornare quam viverra orci. Fames ac
          turpis egestas sed tempus urna et pharetra. Consectetur a erat nam at.
          Turpis in eu mi bibendum neque egestas. Et odio pellentesque diam
          volutpat commodo sed egestas egestas fringilla. Non arcu risus quis
          varius quam. Sagittis nisl rhoncus mattis rhoncus urna neque. Enim ut
          sem viverra aliquet eget sit amet tellus cras. Adipiscing elit
          pellentesque habitant morbi tristique senectus et. Purus gravida quis
          blandit turpis cursus. Dolor sit amet consectetur adipiscing elit duis
          tristique sollicitudin nibh. Lorem donec massa sapien faucibus. Nec
          nam aliquam sem et. Duis ultricies lacus sed turpis tincidunt id
          aliquet risus. In fermentum et sollicitudin ac orci. Netus et
          malesuada fames ac turpis. Aliquet lectus proin nibh nisl condimentum
          id venenatis. Vitae congue eu consequat ac felis. Ultricies lacus sed
          turpis tincidunt id aliquet. Nisl nunc mi ipsum faucibus vitae aliquet
          nec ullamcorper. Netus et malesuada fames ac turpis egestas maecenas
          pharetra. Odio euismod lacinia at quis risus sed vulputate.
          Consectetur libero id faucibus nisl tincidunt eget nullam. Sit amet
          porttitor eget dolor morbi. Amet nulla facilisi morbi tempus iaculis
          urna id volutpat lacus. Commodo ullamcorper a lacus vestibulum sed
          arcu non. Mauris cursus mattis molestie a iaculis at erat pellentesque
          adipiscing. Diam vulputate ut pharetra sit amet aliquam id. Mi tempus
          imperdiet nulla malesuada pellentesque elit eget gravida cum. Lectus
          vestibulum mattis ullamcorper velit. Et malesuada fames ac turpis
          egestas sed tempus. Potenti nullam ac tortor vitae purus faucibus.
          Dignissim suspendisse in est ante in nibh mauris. Sed risus ultricies
          tristique nulla. Magna etiam tempor orci eu. Ac odio tempor orci
          dapibus ultrices. Convallis convallis tellus id interdum velit
          laoreet. Neque aliquam vestibulum morbi blandit cursus risus at
          ultrices. Cursus sit amet dictum sit. Sed tempus urna et pharetra
          pharetra massa massa. Dolor purus non enim praesent elementum
          facilisis. Erat nam at lectus urna duis. Vitae purus faucibus ornare
          suspendisse sed nisi lacus. Nulla facilisi nullam vehicula ipsum a
          arcu cursus vitae. Sem viverra aliquet eget sit amet tellus. Metus
          vulputate eu scelerisque felis imperdiet. Eu facilisis sed odio morbi
          quis commodo odio aenean sed. Non pulvinar neque laoreet suspendisse
          interdum consectetur libero id faucibus. Scelerisque in dictum non
          consectetur a erat. Pharetra pharetra massa massa ultricies. Turpis
          massa tincidunt dui ut ornare lectus sit amet est. In iaculis nunc sed
          augue lacus viverra vitae congue eu. Libero volutpat sed cras ornare
          arcu dui vivamus. Faucibus in ornare quam viverra orci sagittis eu.
          Integer enim neque volutpat ac tincidunt. Aliquet eget sit amet tellus
          cras adipiscing enim eu turpis. Nunc mattis enim ut tellus elementum
          sagittis vitae et. Lacinia quis vel eros donec. Id volutpat lacus
          laoreet non curabitur. Maecenas accumsan lacus vel facilisis volutpat.
          Convallis convallis tellus id interdum velit laoreet. Sit amet mauris
          commodo quis imperdiet massa. Bibendum ut tristique et egestas quis
          ipsum suspendisse ultrices. Ultrices gravida dictum fusce ut placerat
          orci nulla pellentesque. Proin sed libero enim sed. Sit amet porttitor
          eget dolor morbi non arcu risus. Quis ipsum suspendisse ultrices
          gravida dictum fusce ut placerat orci. Rhoncus mattis rhoncus urna
          neque viverra justo. Fermentum et sollicitudin ac orci phasellus.
          Neque laoreet suspendisse interdum consectetur. Nisl rhoncus mattis
          rhoncus urna neque viverra justo nec. Cursus risus at ultrices mi
          tempus imperdiet. Nulla pellentesque dignissim enim sit amet venenatis
          urna. Phasellus vestibulum lorem sed risus. In hendrerit gravida
          rutrum quisque non tellus. Faucibus pulvinar elementum integer enim. A
          lacus vestibulum sed arcu non odio euismod. Eget lorem dolor sed
          viverra ipsum nunc aliquet bibendum enim. Integer feugiat scelerisque
          varius morbi. Leo a diam sollicitudin tempor id eu. Cursus euismod
          quis viverra nibh cras pulvinar mattis. Commodo nulla facilisi nullam
          vehicula ipsum a arcu. Ipsum consequat nisl vel pretium lectus. At
          elementum eu facilisis sed odio morbi quis commodo odio. Auctor augue
          mauris augue neque gravida. Et pharetra pharetra massa massa ultricies
          mi quis. Augue ut lectus arcu bibendum at varius. Viverra justo nec
          ultrices dui sapien eget mi. Turpis egestas sed tempus urna et
          pharetra. Ullamcorper eget nulla facilisi etiam dignissim diam quis
          enim lobortis. Ullamcorper velit sed ullamcorper morbi tincidunt
          ornare massa eget. Ligula ullamcorper malesuada proin libero. Mauris a
          diam maecenas sed enim ut sem viverra aliquet.
        </p>
      </TextContentWrapper>
    </PostWrapper>
  );
}

export default Post;
