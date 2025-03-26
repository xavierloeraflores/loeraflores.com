import { Marquee } from "./magicui/marquee";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { testimonials, type Testimonial } from "~/constants/testimonials";

export default function Testimonials() {
  return (
    <div className="w-full">
      <Marquee pauseOnHover>
        {testimonials.map((testimonial, index) => (
          <TestimonialUI
            key={testimonial.name + index}
            testimonial={testimonial}
          />
        ))}
      </Marquee>
    </div>
  );
}

const TestimonialUI = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="w-64">
      <CardHeader className="flex flex-row gap-2">
        <Avatar>
          <AvatarImage src={testimonial.image} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{testimonial.name}</CardTitle>
          <CardDescription>{testimonial.title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>{testimonial.text}</CardContent>
    </Card>
  );
};
