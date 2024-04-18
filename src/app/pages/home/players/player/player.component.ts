import { Component, computed, effect, input, signal } from "@angular/core";
import { Player } from "../../../../models/player";
import { CircleUserRound, LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-player",
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div class="flex gap-4 items-center">
      @if (profileImageUrl()) {
        <img
          class="w-8 h-8"
          [src]="player().profileImage"
          alt="profile picture"
        />
      } @else {
        <lucide-icon class="w-8 h-8" name="circle-user-round"></lucide-icon>
      }

      <div>{{ player().firstName }} {{ player().lastName }}</div>
    </div>
  `,
  styles: ``,
})
export class PlayerComponent {
  player = input.required<Player>();

  profileImage = computed(() => this.player().profileImage);

  profileImageUrl = signal<string | undefined>(undefined);

  createProfileImageUrl = effect(() => {
    const profileImage = this.profileImage();

    if (!profileImage) return () => {};

    const imageUrl = URL.createObjectURL(profileImage);
    this.profileImageUrl.set(imageUrl);

    // Return a cleanup function that frees up memory.
    return () => URL.revokeObjectURL(imageUrl);
  });
}
