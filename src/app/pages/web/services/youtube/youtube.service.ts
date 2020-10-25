import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class YoutubeService {
  // private $channel = 'UCflfkRrD5MbwYghhqQppnww';
  private $playlist = 'PL9bw4S5ePsEHIrGCcovwyDVo8Pxj7O_qA';
  private $url = 'https://www.googleapis.com/youtube/v3/playlistItems';
  constructor(private $http: HttpClient) { }
  async playlist() {
    const params = {
      playlistId: this.$playlist,
      key: 'AIzaSyBEUW6cTubNma4sQbPtHGpjl9JGkLCc3XU',
      part: 'snippet'
    };
    const resp: any = await this.$http.get(this.$url, { params }).toPromise();
    return {
      nextPage: resp.nextPageToken,
      items: resp.items.map(({ snippet }) => {
        return {
          id: snippet.resourceId.videoId,
          title: snippet.title,
          description: snippet.description,
          publishedAt: snippet.publishedAt,
          thumbnail: snippet.thumbnails.medium.url,
        };
      }),
    };
  }
}
