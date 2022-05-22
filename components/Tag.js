import tw, { styled } from "twin.macro";

const Tag = styled.button(({ isPurple, rounded }) => [
  tw`bg-green-300 text-[#2D3748] hover:bg-green-500`,
  tw`px-3 py-2 focus:ring-4 transition focus:ring-[hsl( 258, 89%, 66%)] 
  `,
  isPurple && tw`bg-[#DDD6FC] text-[#2D3748] hover:bg-[#c4b5fd]`,
  rounded ? tw`rounded-full` : tw`rounded-md`,
]);

export default Tag;
