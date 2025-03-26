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
    <Card className="w-96">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={testimonial.image} />
          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>
            <a
              href={testimonial.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {testimonial.name}
            </a>
          </CardTitle>
          <CardDescription>{testimonial.title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>{testimonial.text}</CardContent>
    </Card>
  );
};
