console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

document.getElementById("submit-comment").addEventListener("click", function() {
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value.trim();

  // 댓글이 비어있으면 경고
  if (commentText === "") {
    alert("댓글을 입력해주세요!");
    return;
  }

  // 댓글을 리스트에 추가하는 부분
  const commentList = document.getElementById("comment-list");
  const newComment = document.createElement("li");
  newComment.innerHTML = `
    <div class="comment-item">
      <div class="comment-author">
        <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
        <span>방문자</span>
      </div>
      <div class="comment-content">${commentText}</div>
    </div>
  `;
  commentList.appendChild(newComment);

  // 댓글 입력창 비우기
  commentInput.value = "";
});
